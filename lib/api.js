const fetch = require('node-fetch')
const querystring = require('querystring')

const API_BASE_URL = 'https://api.infermedica.com/covid19'

async function api(appId, appKey, method, endpoint, bodyOrQuery) {
  let query = ''
  if (method !== 'POST' && bodyOrQuery) {
    query = '?' + querystring.stringify(bodyOrQuery)
  }

  const res = await fetch(`${API_BASE_URL}/${endpoint}${query}`, {
    method,
    headers: new fetch.Headers({
      'App-Id': appId,
      'App-Key': appKey,
      'Content-Type': (method === 'POST' && bodyOrQuery) ? 'application/json' : undefined
    }),
    body: (method === 'POST' && bodyOrQuery) ? JSON.stringify(bodyOrQuery) : undefined
  })

  switch (res.status) {
  case 400:
    throw new Error('API Error: Invalid JSON or missing parameter.')
  case 401:
  case 403:
    throw new Error('API Error: Failed to authenticate.')
  case 404:
    throw new Error(`API Error: Object not found: ${endpoint}`)
  case 405:
    throw new Error(`API Error: Invalid method: ${method}`)
  case 500:
    throw new Error(`API Error: Internal server error.`)
  }
  
  const contentType = res.headers.get('content-type')
  if (contentType && contentType.toLowerCase() === 'application/json') {
    const data = await res.json()
    if (data.message) {
      throw new Error(data.message)
    }
    return data
  } else {
    return res
  }
}

module.exports = api
