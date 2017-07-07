const Document = require('cpf_cnpj');
let Joi = require('joi').extend(require('../index'));

describe('Test CNPFJ', () => {

    const cnpjSchema = Joi.document().cnpj().required();

    it('should be able to validate the CNPJ only as number', () => {
        const validCNPJ = Document.CNPJ.generate();
        Joi.validate(validCNPJ, cnpjSchema, (err, value) => {
            expect(err).toBeNull();
            expect(value).toBe(validCNPJ);
        });
    });

    it('should be able to validate the CNPJ as string with dots and slashes', () => {
        const validCNPJ = Document.CNPJ.generate(true);
        Joi.validate(validCNPJ, cnpjSchema, (err, value) => {
            expect(err).toBeNull();
            expect(value).toBe(validCNPJ);
        });
    });

    it('should fail on invalid CNPJ', () => {
        const cnpj = '0128319128312';
        Joi.validate(cnpj, cnpjSchema, (err, value) => {
            expect(err).not.toBeNull();
            expect(value).toBe(cnpj);
        });
    });
});

describe('Test CPF', () => {

    const cpfSchema = Joi.document().cpf().required();

    it('should be able to validate the CNPJ only as number', () => {
        const validCPF = Document.CPF.generate();
        Joi.validate(validCPF, cpfSchema, (err, value) => {
            expect(err).toBeNull();
            expect(value).toBe(validCPF);
        });
    });

    it('should be able to validate the CNPJ as string with dots and slashes', () => {
        const validCPF = Document.CPF.generate(true);
        Joi.validate(validCPF, cpfSchema, (err, value) => {
            expect(err).toBeNull();
            expect(value).toBe(validCPF);
        });
    });

    it('should fail on invalid CNPJ', () => {
        const cpf = '01283191283';
        Joi.validate(cpf, cpfSchema, (err, value) => {
            expect(err).not.toBeNull();
            expect(value).toBe(cpf);
        });
    });
});