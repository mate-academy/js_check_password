'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = checkPassword('');

    expect(typeof result).toBe('boolean');
  });

  it(`
    should return 'true' for the valid
    password with 8 characters, 1 uppercase character
    and 1 digit
  `, () => {
    const result = checkPassword('Password1!');

    expect(result).toBeTruthy();
  });

  it(`
    should return 'false if 'password.length' < 8
  `, () => {
    const result = checkPassword('Str@ng1');

    expect(result).toBeFalsy();
  });

  it(`
    should return 'false if 'password.length' > 16
  `, () => {
    const result = checkPassword('Password12345678');

    expect(result).toBeFalsy();
  });

  it(`
    should return 'false' if 'password'
    doesn't contain at least 1 upperase letter
  `, () => {
    const result = checkPassword('qwerty123');

    expect(result).toBeFalsy();
  });

  it(`
    should return 'false' if 'password'
    doesn't contain at least 1 digit
  `, () => {
    const result = checkPassword('QwertyABC');

    expect(result).toBeFalsy();
  });

  it(`
    should return 'false' if 'password'
    doesn't contain at least 1 special character
  `, () => {
    const result = checkPassword('Qwerty123');

    expect(result).toBeFalsy();
  });

  it(`
    should return 'false' if 'password'
    contains at least 1 non-latin character
  `, () => {
    const result = checkPassword('Qwerty1!Ы');

    expect(result).toBeFalsy();
  });
});
