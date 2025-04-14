'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should return a boolean`, () => {
    expect(typeof checkPassword('Password1!')).toBe('boolean');
  });

  it(`should return true for a valid password with 8 characters`, () => {
    expect(checkPassword('Pass1@rd')).toBe(true);
  });

  it(`should return 'false' for a password with 7 characters`, () => {
    expect(checkPassword('Pass1!')).toBe(false);
  });

  it(`should return 'true' for a valid password with 9 characters`, () => {
    expect(checkPassword('Passw0rd!')).toBe(true);
  });

  it(`should return 'true' for a valid password with 15 characters`, () => {
    expect(checkPassword('Passw0rd12345!')).toBe(true);
  });

  it(`should return 'true' for a valid password with 16 characters `, () => {
    expect(checkPassword('Passw0rd123456!')).toBe(true);
  });

  it(`should return 'false' for a password with 17 characters`, () => {
    expect(checkPassword('Passw0rd1234567!!')).toBe(false);
  });

  it(`should return false for a password without uppercase letter`, () => {
    expect(checkPassword('password1!')).toBe(false);
  });

  it(`should return false for a password without a digit`, () => {
    expect(checkPassword('Password!')).toBe(false);
  });

  it(`should return false for a password without a special character`, () => {
    expect(checkPassword('Password1')).toBe(false);
  });

  it(`should return false for a password with non-Latin characters`, () => {
    expect(checkPassword('Passw0rd1@Д')).toBe(false);
  });
});
