const fetch = require('node-fetch')
const querystring = require('querystring')

const API_BASE_URL = 'https://api.infermedica.com/covid19'

async function api(appId, appKey, method, endpoint, bodyOrQuery) {
  let query = ''
  if (method !== 'POST' && bodyOrQuery) {
    query = querystring.stringify(bodyOrQuery)
  }

  const res = await fetch(`${API_BASE_URL}/${endpoint}?${query}`, {
    method,
    headers: new Headers({
      'App-Id': appId,
      'App-Key': appKey,
      'Content-Type': (method === 'POST' && bodyOrQuery) ? 'application/json' : undefined
    }),
    body: (method === 'POST' && bodyOrQuery) ? JSON.stringify(bodyOrQuery) : undefined
  })
  
  const contentType = res.headers.get('content-type')
  if (contentType && contentType.toLowerCase() === 'application/json') {
    return res.json()
  } else {
    return res
  }
}

module.exports = api
