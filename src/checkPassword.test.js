'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('false')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('1Passwo!')).toBe(true);
  });

  // write more tests here

  it(`should return 'false' for the valid password with 7 characters`, () => {
    expect(checkPassword('1Pasw!')).toBe(false);
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('1Password!qwerty')).toBe(true);
  });

  it(`should return 'false' for the valid password with 17 characters`, () => {
    expect(checkPassword('1Password!qwertyu')).toBe(false);
  });

  it(`should return 'false' for the password
    without numbers, length 13 characters`, () => {
    expect(checkPassword('Password!qwer')).toBe(false);
  });

  it(`should return 'false' for the password
    without special characters, lengh 13 characters`, () => {
    expect(checkPassword('1Passwordqwert')).toBe(false);
  });

  it(`should return 'false' for the password
    without uppercase, length 13 characters`, () => {
    expect(checkPassword('1password!qwe')).toBe(false);
  });
});
