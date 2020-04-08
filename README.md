# Infermedica Covid Symptom Checker

Node.js wrapper for the [Infermedica Covid-18 API](https://developer.infermedica.com/docs/covid-19).

## Available methods

See the [Infermedica API Reference](https://developer.infermedica.com/docs/api) for method schemas.

- diagnosis
- triage
- search
- symptoms
- riskFactors
- locations

## Usage

You will need to [obtain an App ID and App Key](https://developer.infermedica.com/signup) from Infermedica.

```js
# create authenticated client
const covid = require('infermedica-covid')('APP_ID', 'APP_KEY')

// ...

# start using API methods
const initialDiagnosis = await covid.diagnosis({
  sex: 'male',
  age: 30,
  evidence: []
})
```

## Examples

See the [examples](examples) directory for ideas on getting started. The [Infermedica API Reference](https://developer.infermedica.com/docs/api) explains each method in great detail.

## Legal

The Infermedica API is copyrighted by [Infermedica](http://infermedica.com/).

This library is released under the [MIT License](LICENSE).
