import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

class SupabaseClient {
  constructor() {
    let cookieStore = cookies()

    this.supabase = createServerClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_ANON_KEY,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll()
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
          }
        },
      }
    )
  }

  async getAccessToken() {
    try {
      const response = await this.supabase.from('ApiToken').select('*')
      if (response.error) {
        console.error("Error occurred while fetching from db - HttpStatus: " + response.status + " | Message: " + error)
        return { errorRes: response.error }
      } else if (response.statusText != 'OK' || response.status > 399) {
        console.error("Error occurred while fetching from db - HttpStatus: " + response.status)
        return { errorRes: "Error fetching from db" }
      } else if (response.data === null || response.data.length < 1) {
        console.error("Error occurred while fetching from db - HttpStatus: " + response.status + " | Message: " + "data is missing")
        return { errorRes: "Error fetching from db - data missing" }
      }
      return { data: response.data }
    } catch (error) {
      return { errorRes: "Error fetching from db - Message: " + error }
    }
  }
}

export default SupabaseClient