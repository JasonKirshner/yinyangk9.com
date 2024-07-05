import { createServerClient, serializeCookieHeader } from '@supabase/ssr'
import { setCookie, getCookie, hasCookie } from 'cookies-next'

import { oneDayInFuture, responseErrorHandler } from '../util/util'

const initSupabaseClient = (req, res) => {
  return createServerClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return Object.keys(req.cookies)
          .map((name) => ({ name, value: req.cookies[name] }))
        },
        setAll(cookiesToSet) {
          res.setHeader('Set-Cookie',
            cookiesToSet.map(({ name, value, options }) =>
              serializeCookieHeader(name, value, options)))
        }
      },
    }
  )
}

export const getAccessToken = async (req, res) => {
  let accessTokenObj
  
  if (hasCookie('accessTokenStore', { req, res })) {
    const accessTokenStore = getCookie('accessTokenStore', { req, res })

    if (accessTokenStore.errorRes === null && accessTokenStore.token?.length > 0) {
      return accessTokenStore.token
    }
    
    return null
  }

  try {
    const supabaseClient = await initSupabaseClient(req, res)
    
    const response = await supabaseClient.from('ApiToken').select('*')
    
    responseErrorHandler(response, 'Supabase Api')

    const accessToken = response.data[0].access_token
    accessTokenObj = { token: accessToken, errorRes: null }

    setCookie('accessTokenStore', accessTokenObj, {
      req,
      res,
      httpOnly: true,
      expires: oneDayInFuture()
    })

    return accessToken
  } catch (error) {
    console.error(error)

    accessTokenObj = { token: null, errorRes: error }
    
    setCookie('accessTokenStore', accessTokenObj, {
      req,
      res,
      httpOnly: true,
      expires: oneDayInFuture()
    })

    return null
  }
}
