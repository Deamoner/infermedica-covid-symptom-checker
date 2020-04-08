require('dotenv').config()

const checker = require('../index')(process.env.APP_ID, process.env.APP_KEY)

const log = data => console.log(JSON.stringify(data, null, 2))

async function main() {
  try {
    const initialDiagnosis = await checker.diagnosis({
      sex: 'male',
      age: 30,
      evidence: []
    })

    log(initialDiagnosis)
  } catch (err) {
    console.error(err)
  }
}

main()
