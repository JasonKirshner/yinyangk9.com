import { getCookie, hasCookie } from 'cookies-next'

import { oneDayInSeconds, responseErrorHandler } from '../js/util'
import { IBD_REFRESH_TOKEN_URI } from '../js/constants'
import instagramFeedTestData from "../data/instagramFeed.json"
import { getAccessToken } from "./SupabaseClient"


export default async function getInstagramFeed(req, res) {
  try {
    let accessToken

    if (hasCookie('accessTokenStore', { req, res })) {
      const accessTokenStore = getCookie('accessTokenStore', { req, res })
  
      if (accessTokenStore.errorRes === null && accessTokenStore.token?.length > 0) {
        if (needTokenRefresh(accessTokenStore.lastUpdate)) {
          accessToken = await refreshToken(accessTokenStore.token)
        } else {
          accessToken = accessTokenStore.token
        }
      }
    } else {
      accessToken = await getAccessToken(req, res)
    }

    if (accessToken === null) {
      return null
    }
      
    const url = process.env.INSTAGRAM_BASIC_DISPLAY_API_URI + accessToken
    const response = await fetch(url, { next: { revalidate: oneDayInSeconds() } })

    responseErrorHandler(response, 'Instagram Basic Display Api')

    const instagramFeed = await response.json()
    instagramFeed.data.push.apply(instagramFeed.data, instagramFeedTestData)

    return instagramFeed
  } catch (err) {
    console.error("Error fetching Instagram feed:", err.message)

    return null
  }
}

export async function refreshToken(accessToken) {
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
  const lastUpdateDate = new Date.parse(lastUpdate)
  const currentDate = new Date.now()

  const daysSinceLastUpdate = currentDate - lastUpdateDate

  if (daysSinceLastUpdate >= thirtyDaysInMilliseconds()) {
    return true
  }

  return false
}