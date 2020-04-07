require('dotenv').config()

const api = require('./api')

const { APP_ID, APP_KEY } = process.env

describe('api', () => {
  test('properly authenticates, returning 200', async () => {
    const data = await api(APP_ID, APP_KEY, 'GET', 'symptoms')
    expect(data.message).not.toBe('authentication failed')
  })

  test('sends query params in GET', async () => {
    const data = await api(APP_ID, APP_KEY, 'GET', 'search', { phrase: 'China' })
    expect(data[0].label).toBe('China')
  })

  test('sends body in POST', async () => {
    const body = {
      sex: 'male',
      age: 30,
      evidence: []
    }
    const data = await api(APP_ID, APP_KEY, 'POST', 'diagnosis', body)
    expect(data.question).toBeTruthy()
  })
})
