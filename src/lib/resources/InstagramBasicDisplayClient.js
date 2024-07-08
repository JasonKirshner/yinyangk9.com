import { getCookie, hasCookie } from 'cookies-next'

import {
  oneDayInSeconds,
  responseErrorHandler,
  validation,
  thirtyDaysInMilliseconds,
  oneDayInMilliseconds
} from '../js/util'
import { IBD_REFRESH_TOKEN_URI } from '../js/constants'
import { getAccessToken, updateAccessToken } from "./SupabaseClient"


const getInstagramFeed = async (req, res) => {
  try {
    const accessToken = await retrieveAccessToken(req, res)
    
    if (!validation(accessToken)) {
      return null
    }
      
    const url = process.env.INSTAGRAM_BASIC_DISPLAY_API_URI + accessToken
    const response = await fetch(url, { next: { revalidate: oneDayInSeconds() } })
    
    responseErrorHandler(response, 'Instagram Basic Display Api')
    
    const instagramFeed = await response.json()

    return instagramFeed
  } catch (err) {
    console.error("Error fetching Instagram feed:", err.message)

    return null
  }
}

const refreshToken = async (accessToken) => {
  const refreshTokenUrl = IBD_REFRESH_TOKEN_URI + accessToken

  try {
    const refreshTokenResponse = await fetch(refreshTokenUrl)
    const refreshTokenObject = await refreshTokenResponse.json()
    const newAccessToken = refreshTokenObject.access_token

    responseErrorHandler(refreshTokenResponse, 'Refreshing Instagram Basic Display Access Token')
    
    return newAccessToken
  } catch (err) {
    console.error("Error refreshing IBD access token:", err.message)

    return null
  }
}

const needTokenRefresh = (lastUpdate) => {
  const lastUpdateDate = Date.parse(lastUpdate)
  const currentDate = Date.now()

  const daysSinceLastUpdate = (currentDate - lastUpdateDate) / oneDayInMilliseconds()

  if (daysSinceLastUpdate >= thirtyDaysInMilliseconds()) {
    return true
  }

  return false
}

const retrieveAccessToken = async (req, res) => {
  if (hasCookie('accessTokenStore', { req, res })) {
    const accessTokenStore = JSON.parse(getCookie('accessTokenStore', { req, res }))

    if (accessTokenStore?.errorRes === null && accessTokenStore?.token?.length > 0) {
      if (needTokenRefresh(accessTokenStore.lastUpdate)) {
        const newAccessToken = await refreshToken(accessTokenStore.token)
        updateAccessToken(req, res, newAccessToken)

        return newAccessToken
      } else {
        return accessTokenStore.token
      }
    } else {
      return await getAccessToken(req, res)
    }
  } else {
    return await getAccessToken(req, res)
  }
}

export default getInstagramFeed