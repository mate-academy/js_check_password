'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = checkPassword('1@Password');

    expect(typeof result).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    const result = checkPassword('1@Password');

    expect(result).toBe(true);
  });

  it(`should return 'false' if password length is less 8 characters`, () => {
    const result = checkPassword('1@Pass');

    expect(result).toBe(false);
  });

  it(`should return 'false' if password length is more 16 characters`, () => {
    const result = checkPassword('1@PassDDDDDDDDDDDDDDDDDDDDDDDD');

    expect(result).toBe(false);
  });

  it(`should return 'false' if password `
    + `includes not Latin alphabet Aa-Zz`, () => {
    const result = checkPassword('1@яPassDDDDDDDDDDDDDDDDDDDDDDDD');

    expect(result).toBe(false);
  });

  it(`should return 'false' if password `
    + `does not include at least one digit`, () => {
    const result = checkPassword('@PassDDDDDDDDDDDDDDDDDDDDDDDD');

    expect(result).toBe(false);
  });

  it(`should return 'false' if password `
    + `does not include at least 1 special symbol`, () => {
    const result = checkPassword('1PassDDDDDDDDDDDDDDDDDDDDDDDD');

    expect(result).toBe(false);
  });

  it(`should return 'false' if password `
    + `does not include at least 1 uppercase letter`, () => {
    const result = checkPassword('1@pppppppppp');

    expect(result).toBe(false);
  });
});
