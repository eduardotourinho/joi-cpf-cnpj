# joi-cpf-cnpj

a Joi module validation for the Brazilian CPF and CNPJ documents

## Installation

### Via NPM
`npm install joi-cpf-cnpj --save`

## Usage

```javascript
const Joi = require('joi').extend(require('joi-cpf-cnpj'));

let cnpjSchema = Joi.document().cnpj();
let cpfSchema = Joi.document().cpf();

// Validate a CNPJ
Joi.validate('51855572000193', cnpjSchema);

// Validate a CPF
Joi.validate('64122484553', cpfSchema);
```
