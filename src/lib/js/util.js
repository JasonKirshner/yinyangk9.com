export const oneDayInSeconds = () => {
  return 24 * 60 * 60
}

export const oneDayInMilliseconds = () => {
  return 24 * 60 * 60 * 1000
}

export const oneDayInFuture = () => {
  const date = new Date()
  date.setDate(date.getDate() + 1)

  return date
}

export const responseErrorHandler = (res, resourceName, fn) => {
  let message = null

  if (res?.error) {
    message = res.error.message
  } else {
    message = res.statusText
  }

  if (res.error || res.status > 399) {
    fn(new Error(`Error occurred while fetching ${resourceName} - HttpStatus: ${res.status} | Message: ${message}`))
  } else if (res.data && (res.data === null || res.data?.length < 1)) {
    fn(new Error(`Error occurred while fetching from ${resourceName} - HttpStatus: ${res.status} | Message: data is missing`))
  }
}

export const validation = (val) => {
  return val !== null && val !== undefined
}
