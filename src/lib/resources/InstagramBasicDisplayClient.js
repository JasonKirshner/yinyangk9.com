import { getCookie, hasCookie } from 'cookies-next'

import {
  oneDayInSeconds,
  responseErrorHandler,
  validation,
  oneDayInMilliseconds
} from '../js/util'
import { IBD_REFRESH_TOKEN_URI } from '../js/constants'
import { getAccessToken, updateAccessToken } from './SupabaseClient'

const getInstagramFeed = async (req, res) => {
  try {
    const accessToken = await retrieveAccessToken(req, res)

    if (!validation(accessToken)) {
      return null
    }

    const url = process.env.INSTAGRAM_BASIC_DISPLAY_API_URI + accessToken
    const response = await fetch(url, { next: { revalidate: oneDayInSeconds() } })

    responseErrorHandler(response, 'Instagram Basic Display Api', (err) => {
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

const refreshToken = async (accessToken) => {
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

const needTokenRefresh = (lastUpdate) => {
  const lastUpdateDate = Date.parse(lastUpdate)
  const currentDate = Date.now()

  const daysSinceLastUpdate = (currentDate - lastUpdateDate) / oneDayInMilliseconds()

  if (daysSinceLastUpdate >= 30) {
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

    return filteredFeed
  } catch (error) {
    console.error(error)

    return null
  }
}

export default getInstagramFeed
