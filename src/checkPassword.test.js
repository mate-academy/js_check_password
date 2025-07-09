'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = checkPassword('Password1!');

    expect(typeof result).toBe('boolean');
  });

  it(`should return true for a valid password (example: 'Password1!')`, () => {
    expect(checkPassword('Password1!')).toBe(true);
  });

  it(`should return false for password with less than 8 characters`, () => {
    expect(checkPassword('P@ss1')).toBe(false);
  });

  it(`should return false for password with more than 16 characters`, () => {
    expect(checkPassword('Password12345678!')).toBe(false);
  });

  it(`should return false for password without uppercase letter`, () => {
    expect(checkPassword('password1!')).toBe(false);
  });

  it(`should return false for password without digit`, () => {
    expect(checkPassword('Password!')).toBe(false);
  });

  it(`should return false for password without special character`, () => {
    expect(checkPassword('Password1')).toBe(false);
  });

  it(`should return false for password containing Cyrillic letters`, () => {
    expect(checkPassword('Пароль1!')).toBe(false);
  });

  it(`should return false for password with only lowercase letters`, () => {
    expect(checkPassword('qwertyui')).toBe(false);
  });

  it(`should return false for password with only uppercase letters`, () => {
    expect(checkPassword('PASSWORD1!')).toBe(false);
  });

  it(`should return true for valid password of exactly 8 characters`, () => {
    expect(checkPassword('Passw1!A')).toBe(true);
  });

  it(`should return true for valid password of exactly 16 characters`, () => {
    expect(checkPassword('ValidPassw1!Word')).toBe(true);
  });

  it(`should return false for password with spaces`, () => {
    expect(checkPassword('Pass word1!')).toBe(false);
  });
});
