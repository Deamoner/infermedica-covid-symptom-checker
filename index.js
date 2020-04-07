const api = require('./lib/api')

function SymptomChecker(appId, apiToken) {
  const authedApi = (...params) => api(appId, apiToken, ...params)
    
  return {
    diagnosis: async (body) => {
      const data = await authedApi('POST', 'diagnosis', body)
      return data
    }
  }
}

module.exports = SymptomChecker
