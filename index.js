const Joi = require('joi');
const document = require('cpf_cnpj');

module.exports = {
    base: Joi.string(),
    name: 'document',
    language: {
        cnpj: 'is an invalid CNPJ number',
        cpf: 'is an invalid CPF number'
    },
    rules: [
        {
            name: 'cnpj',
            validate(params, value, state, options) {
                if (!document.CNPJ.isValid(value)) {
                    return this.createError('document.cnpj', {v: value}, state, options);
                }

                return value;
            }
        },
        {
            name: 'cpf',
            validate(params, value, state, options) {
                if (!document.CPF.isValid(value)) {
                    return this.createError('document.cpf', {v: value}, state, options);
                }

                return value;
            }
        }
    ]
};