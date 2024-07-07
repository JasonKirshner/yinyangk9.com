export const oneDayInSeconds = () => {
  return 24 * 60 * 60
}

export const thirtyDaysInMilliseconds = () => {
  return 24 * 60 * 60 * 30
}

export const oneDayInFuture = () => {
  const date = new Date()
  date.setDate(date.getDate() + 1)
  
  return date
}

export const responseErrorHandler = (res, resourceName) => {
  if (res.statusText != 'OK' || res.error || res.status > 399) {
    throw new Error(`Error occurred while fetching ${resourceName} - HttpStatus: ${res.status} | Message: ${res.body}`);
  } else if (res.data === null || res.data?.length < 1) {
    throw new Error(`Error occurred while fetching from ${resourceName} - HttpStatus: ${res.status} | Message: data is missing`)
  }
}
