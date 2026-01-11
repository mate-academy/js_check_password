'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Password1!')).toBe(true);
  });

  it(`should return 'false' for the password less than 8 characters`, () => {
    expect(checkPassword('qwerty')).toBe(false);
  });

  it(`should return 'false' for the password without digit`, () => {
    expect(checkPassword('Str@ng')).toBe(false);
  });

  it(`should return 'false' for the password without uppercase letter`, () => {
    expect(checkPassword('password1!')).toBe(false);
  });

  it(`should return 'true' for the password without lowercase letter`, () => {
    expect(checkPassword('PASSWORD1!')).toBe(true);
  });

  it(`should return 'false' for the password without special character`, () => {
    expect(checkPassword('Password1')).toBe(false);
  });

  it(`should return 'false' for the password with spaces`, () => {
    expect(checkPassword('Pass word1!')).toBe(false);
  });

  it(`should return 'false' for the password with cyrillic characters`, () => {
    expect(checkPassword('Пароль1!')).toBe(false);
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('ValidPass1234$%')).toBe(true);
  });

  it(`should return 'false' for the password more than 16 characters`, () => {
    expect(checkPassword('ThisIsAVeryLongPassword1!')).toBe(false);
  });
});
