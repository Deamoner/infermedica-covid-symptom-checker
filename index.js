const api = require('./lib/api')

function SymptomChecker(appId, apiToken) {
  const authedApi = (...params) => api(appId, apiToken, ...params)
    
  return {
    diagnosis: async (body) => {
      const data = await authedApi('POST', 'diagnosis', body)
      return data
    },
    triage: async (body) => {
      const data = await authedApi('POST', 'triage', body)
      return data
    },
    search: async (query) => {
      const data = await authedApi('GET', 'search', query)
      return data
    },
    symptoms: async (query) => {
      const data = await authedApi('GET', 'symptoms', query)
      return data
    },
    riskFactors: async (query) => {
      const data = await authedApi('GET', 'risk_factors', query)
      return data
    },
    locations: async (query) => {
      const data = await authedApi('GET', 'locations', query)
      return data
    }
  }
}

module.exports = SymptomChecker

