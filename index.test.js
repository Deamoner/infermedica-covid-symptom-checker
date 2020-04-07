require('dotenv').config()

const SymptomChecker = require('./index')

const { APP_ID, APP_KEY } = process.env

describe('SymptomChecker', () => {
  const checker = SymptomChecker(APP_ID, APP_KEY)

  test('diagnosis', async () => {
    const res = await checker.diagnosis({
      sex: 'male',
      age: 30,
      evidence: []
    })
    expect(res.question).toBeTruthy()
  })
})


