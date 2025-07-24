'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('Valid1!')).toBe('boolean');
  });

  it(`valid password with 8 characters`, () => {
    expect(checkPassword('Passwo!1')).toBeTruthy();
  });

  it(`valid password with 16 characters`, () => {
    expect(checkPassword('PasswordTest!123')).toBeTruthy();
  });

  it(`password length < 8 characters`, () => {
    expect(checkPassword('Passw!1')).toBeFalsy();
  });

  it(`password length > 16 characters`, () => {
    expect(checkPassword('PasswordTest!123456789')).toBeFalsy();
  });

  it(`password missing digit`, () => {
    expect(checkPassword('Password!')).toBeFalsy();
  });

  it(`password missing special character`, () => {
    expect(checkPassword('Password1')).toBeFalsy();
  });

  it(`password missing uppercase letter`, () => {
    expect(checkPassword('password!1')).toBeFalsy();
  });
});
