'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('')).toBe('boolean');
  });

  it(`should return 'true' for the valid password`
    + `with min 8 to 16 characters`, () => {
    const result = checkPassword('Password1!');

    expect(result).toBe(true);
  });

  it(`should accept only letters of the Latin alphabet Aa-Zz`, () => {
    const result = checkPassword('Пароль123!');

    expect(result).toBe(false);
  });

  it(`should return 'false' for password`
    + `with more than 16 characters`, () => {
    const result = checkPassword('Password123456789!');

    expect(result).toBe(false);
  });

  it(`should contain at least`
    + `1 digit, 1 special character, 1 uppercase letter.`, () => {
    const result = checkPassword('Strong-password1');

    expect(result).toBe(true);
  });
});
