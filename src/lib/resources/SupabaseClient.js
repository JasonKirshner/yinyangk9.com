import { createServerClient, serializeCookieHeader } from '@supabase/ssr'

import { responseErrorHandler } from '../js/util'

const initSupabaseClient = (req, res) => {
  return createServerClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll () {
          if (req && req.cookies) {
            return Object.keys(req.cookies)
              .map((name) => ({ name, value: req.cookies[name] }))
          }
          return null
        },
        setAll (cookiesToSet) {
          if (res) {
            res.setHeader('Set-Cookie',
              cookiesToSet.map(({ name, value, options }) =>
                serializeCookieHeader(name, value, options)))
          }
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
      .select('access_token')
      .eq('id', 1)

    responseErrorHandler(response, 'Supabase Api [getAccessToken]', (err) => {
      if (err) {
        throw err
      }
    })

    const accessToken = response.data[0].access_token
    accessTokenObj = { accessToken, errorRes: null }

    return accessTokenObj
  } catch (error) {
    console.error(error)
    accessTokenObj = { accessToken: null, errorRes: error }

    return accessTokenObj
  }
}

export const updateAccessToken = async (req, res, newAccessToken) => {
  try {
    const supabaseClient = initSupabaseClient(req, res)

    const response = await supabaseClient
      .from('ApiToken')
      .update({ access_token: newAccessToken })
      .eq('id', 1)

    responseErrorHandler(response, 'Supabase Api [updateAccessToken]', (err) => {
      if (err) {
        throw err
      }
    })

    return response
  } catch (error) {
    console.error(error)

    return null
  }
}
