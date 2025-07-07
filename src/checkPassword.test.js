'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('f')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Zxcvbn1,')).toBe(true);
  });

  it(`func should accept only letters of the Latin alphabet Aa-Zz`, () => {
    expect(checkPassword('Asagsіфвп12,')).toBe(false);
  });

  it(`func must accept a password consisting of at least 8 characters `
    + 'as a parameter.', () => {
    expect(checkPassword('Asdf,2')).toBe(false);
  });

  it(`func must accept a password consisting of not more than 16 characters `
    + 'as a parameter.', () => {
    expect(checkPassword('sAdagsadkgksahdghsdaoughusadg,12')).toBe(false);
  });
});
