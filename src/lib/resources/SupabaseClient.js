import { createServerClient, serializeCookieHeader } from '@supabase/ssr'
import { setCookie } from 'cookies-next'

import { oneDayInFuture, responseErrorHandler } from '../js/util'

const initSupabaseClient = (req, res) => {
  return createServerClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll () {
          return Object.keys(req.cookies)
            .map((name) => ({ name, value: req.cookies[name] }))
        },
        setAll (cookiesToSet) {
          res.setHeader('Set-Cookie',
            cookiesToSet.map(({ name, value, options }) =>
              serializeCookieHeader(name, value, options)))
        }
      }
    }
  )
}

export const getAccessToken = async (req, res) => {
  let accessTokenObj

  try {
    const supabaseClient = initSupabaseClient(req, res)

    const response = await supabaseClient
      .from('ApiToken')
      .select('access_token, updated_at')
      .eq('id', 1)

    responseErrorHandler(response, 'Supabase Api (getAccessToken)')

    const accessToken = response.data[0].access_token
    const lastUpdate = response.data[0].updated_at
    accessTokenObj = { token: accessToken, lastUpdate, errorRes: null }
    setCookie('accessTokenStore', accessTokenObj, {
      req,
      res,
      httpOnly: true,
      expires: oneDayInFuture()
    })

    return accessToken
  } catch (error) {
    console.error(error)

    accessTokenObj = { errorRes: error }
    setCookie('accessTokenStore', accessTokenObj, {
      req,
      res,
      httpOnly: true,
      expires: oneDayInFuture()
    })

    return null
  }
}

export const updateAccessToken = async (req, res, newAccessToken) => {
  let accessTokenObj

  try {
    const supabaseClient = initSupabaseClient(req, res)

    const response = await supabaseClient
      .from('ApiToken')
      .update({ access_token: newAccessToken })
      .eq('id', 1)
      .select('updated_at')

    responseErrorHandler(response, 'Supabase Api (updateAccessToken)')

    const lastUpdate = response.data[0].updated_at
    accessTokenObj = { token: newAccessToken, lastUpdate, errorRes: null }
    setCookie('accessTokenStore', accessTokenObj, {
      req,
      res,
      httpOnly: true,
      expires: oneDayInFuture()
    })
  } catch (error) {
    console.error(error)

    accessTokenObj = { errorRes: error }
    setCookie('accessTokenStore', accessTokenObj, {
      req,
      res,
      httpOnly: true,
      expires: oneDayInFuture()
    })
  }
}
