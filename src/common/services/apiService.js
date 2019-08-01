import cache from 'common/utils/cache'
import axios from 'axios'

export function apiFetch(relUrl, params = {}, noCache) {
  //return on next tick, letting mobx show loading indicator
  const url = createUrl(relUrl, params)
  if (cache.has(url) && !noCache) {
    //console.log('found on cache', url)
    const data = cache.get(url)
    return new Promise((resolve) => setTimeout(() => resolve(data), 0))
  }

  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(response => {
        cache.add(url, response.data)
        return resolve(response.data)
      })
      .catch(error => {
        console.error('apiFetch Error:', error)
        return reject({ error })
      })
  })
}

export function createUrl(relUrl, searchParams = {}) {
  let url = `${process.env.API_BASEURL}/${relUrl}`
  Object.keys(searchParams).forEach((key, index) => {
    if (index === 0) {
      url += '?'
    }
    if (index > 0) {
      url += '&'
    }
    //url += `${key}=${searchParams[key]}`
    const val = typeof searchParams[key] === 'string'
      ? searchParams[key]
      : JSON.stringify(searchParams[key])
    url += `${key}=${encodeURIComponent(val)}`
  })
  return url
}

export function clearCache() {
  cache.clear()
}
