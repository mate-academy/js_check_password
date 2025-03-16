'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(checkPassword('hey')).toBe(false);
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Password1!')).toBe(true);
  });
  it(`should return 'false' if password contains less than 8 characters`, () => {
    expect(checkPassword('Pass1!')).toBe(false);
  });
  it(`should return 'true' if password contains 8 characters`, () => {
    expect(checkPassword('Passwd1!')).toBe(true);
  });
  it(`should return 'false' if password contains more than 16 characters`, () => {
    expect(checkPassword('Password1!password')).toBe(false);
  });
  it(`should return 'true' if password contains 16 characters`, () => {
    expect(checkPassword('Password1!passwd')).toBe(true);
  });
  it(`should return 'true' if password contains at least 1 digit, 1 special character, 1 uppercase letter`, () => {
    expect(checkPassword('Password1!')).toBe(true);
  });
  it(`should return 'false' if password contains at least 1 digit, 1 special character, but no uppercase letters`, () => {
    expect(checkPassword('password1!')).toBe(false);
  });
  it(`should return 'false' if password contains at least 1 digit, 1 uppercase letter, but no special characters`, () => {
    expect(checkPassword('Password1')).toBe(false);
  });
  it(`should return 'false' if password contains at least 1 uppercase letter, 1 special character, but no digits`, () => {
    expect(checkPassword('Password!')).toBe(false);
  });
  it(`should return 'false' if password accepts letters not of the Latin alphabet Aa-Zz`, () => {
    expect(checkPassword('Пароль1!')).toBe(false);
  });
  it(`should return 'false' for an empty string`, () => {
    expect(checkPassword('')).toBe(false);
  });
});
