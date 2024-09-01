import { getCookie, hasCookie, setCookie } from 'cookies-next'

import {
  oneDayInSeconds,
  responseErrorHandler,
  validation,
  oneDayInFuture
} from '../js/util'
import { IBD_REFRESH_TOKEN_URI } from '../js/constants'
import { getAccessToken } from './SupabaseClient'

const getInstagramFeed = async (req, res) => {
  try {
    if (hasCookie('instagramFeed', { req, res })) {
      const igFeed = JSON.parse(getCookie('instagramFeed', { req, res }))

      if (igFeed) {
        return igFeed
      }
    }

    const { accessToken, errorRes } = await getAccessToken(req, res)

    if (!validation(accessToken)) {
      throw new Error('Unable to Retrieve Access Token: value is null or undefined')
    } else if (validation(errorRes)) {
      throw new Error(errorRes)
    }

    const url = process.env.INSTAGRAM_BASIC_DISPLAY_API_URI + accessToken
    const response = await fetch(url, { next: { revalidate: oneDayInSeconds() } })

    responseErrorHandler(response, 'Instagram Basic Display API', (err) => {
      if (err) {
        throw err
      }
    })

    const instagramFeed = await response.json()

    const filteredInstagramFeed = await filterInstagramFeed(instagramFeed)

    return filteredInstagramFeed
  } catch (err) {
    console.error('Error fetching Instagram feed:', err.message)

    return null
  }
}

export const refreshToken = async (accessToken) => {
  const refreshTokenUrl = IBD_REFRESH_TOKEN_URI + accessToken

  try {
    const refreshTokenResponse = await fetch(refreshTokenUrl)
    const refreshTokenObject = await refreshTokenResponse.json()
    const newAccessToken = refreshTokenObject.access_token

    responseErrorHandler(refreshTokenResponse, 'Refreshing Instagram Basic Display Access Token', (err) => {
      if (err) {
        throw err
      }
    })

    return newAccessToken
  } catch (err) {
    console.error('Error refreshing IBD access token:', err.message)

    return null
  }
}

const filterInstagramFeed = async (igFeed) => {
  const igFeedData = igFeed.data
  let nextPageURL = igFeed.paging.next
  let filteredFeed = igFeedData.filter(post => post.caption.includes('#yyk9'))

  try {
    while (filteredFeed.length < 8 && nextPageURL) {
      const nextPageRes = await fetch(nextPageURL, { next: { revalidate: oneDayInSeconds() } })
      responseErrorHandler(nextPageRes, 'Retrieving next Instagram Feed page', (err) => {
        if (err) {
          throw err
        }
      })
      const nextPageFeed = await nextPageRes.json()
      nextPageURL = nextPageFeed.paging?.next
      const nextPageFeedData = nextPageFeed.data
      const filteredNextPageFeed = nextPageFeedData.filter(post => post.caption.includes('#yyk9'))
      filteredFeed.push(...filteredNextPageFeed)

      if (filteredFeed.length > 8) {
        filteredFeed = filteredFeed.slice(0, 8)
      }
    }
    setIGFeedCookie(filteredFeed)

    return filteredFeed
  } catch (error) {
    console.error(error)
    setIGFeedCookie(null)

    return null
  }
}

const setIGFeedCookie = (igFeed, req, res) => {
  setCookie('instagramFeed', igFeed, {
    req,
    res,
    httpOnly: true,
    expires: oneDayInFuture()
  })
}

export default getInstagramFeed
