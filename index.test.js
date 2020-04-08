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

  test('triage', async () => {
    const res = await checker.triage({
      "sex": "male",
      "age": 65,
      "evidence": [
         {"id": "p_16", "choice_id": "absent"},
         {"id": "p_17", "choice_id": "present"},
         {"id": "p_18", "choice_id": "absent"},
         {"id": "p_19", "choice_id": "absent"},
         {"id": "p_20", "choice_id": "absent"},
         {"id": "p_21", "choice_id": "absent"},
         {"id": "p_22", "choice_id": "absent"},
         {"id": "s_0", "choice_id": "absent"},
         {"id": "s_1", "choice_id": "absent"},
         {"id": "s_2", "choice_id": "absent"},
         {"id": "s_15", "choice_id": "present"},
         {"id": "s_16", "choice_id": "present"},
         {"id": "s_17", "choice_id": "absent"},
         {"id": "s_18", "choice_id": "absent"},
         {"id": "s_19", "choice_id": "absent"},
         {"id": "s_20", "choice_id": "absent"},
         {"id": "s_21", "choice_id": "absent"},
         {"id": "p_12", "choice_id": "present"}
        ]
    })
    console.log(res)
    expect(res.triage_level).toBeTruthy()
  })
})


