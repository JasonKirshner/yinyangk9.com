import { oneDayInSeconds, responseErrorHandler } from '../js/util'
import { IBD_REFRESH_TOKEN_URI } from '../js/constants'
import instagramFeedTestData from "../data/instagramFeed.json"
import { getAccessToken } from "./SupabaseClient"

export default async function getInstagramFeed(req, res) {
  try {
    const accessToken = await getAccessToken(req, res)

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