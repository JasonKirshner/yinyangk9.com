import { getAccessToken, updateAccessToken } from '../resources/SupabaseClient'
import { refreshToken } from '../resources/InstagramBasicDisplayClient'
import { validation } from '../js/util'

const scheduledFunction = async () => {
  try {
    const { accessToken, errorRes } = await getAccessToken(null, null)

    if (!validation(accessToken)) {
      throw new Error('Unable to Retrieve Access Token: value is null or undefined')
    } else if (validation(errorRes)) {
      throw new Error(errorRes)
    }

    const newAccessToken = await refreshToken(accessToken)

    if (!validation(newAccessToken)) {
      throw new Error('Unable to Retrieve Refreshed Access Token: value is null or undefined')
    }

    const uatRes = await updateAccessToken(null, null, newAccessToken)

    if (uatRes.status < 399) {
      console.log('Instagram Basic Display API Access Token has been refreshed and updated in Supabase')
    } else {
      throw new Error('Token has been refreshed but the update to Supabase has failed')
    }
  } catch (error) {
    console.error(error)
  }
}

export default scheduledFunction

export const config = {
  schedule: '@weekly'
}
