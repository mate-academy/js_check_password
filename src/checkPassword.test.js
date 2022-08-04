'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('Password')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Password1!')).toBe(true);
  });

  it(`should return 'false' for the password less than 8 characters`, () => {
    expect(checkPassword('Pass1!')).toBe(false);
  });

  it(`should return 'false' for the password more than 16 characters`, () => {
    expect(checkPassword('Password12345678!')).toBe(false);
  });

  it(`should return 'false' for the password with
    symbols not from Latin alphabet`, () => {
    expect(checkPassword('йPassword1!')).toBe(false);
  });

  it(`should return 'false' for the password without at least 1 digit`, () => {
    expect(checkPassword('Password!')).toBe(false);
  });

  it(`should return 'false' for the password without
    at least 1 special character`, () => {
    expect(checkPassword('Password1')).toBe(false);
  });

  it(`should return 'false' for the password without
    at least 1 uppercase letter`, () => {
    expect(checkPassword('password1!')).toBe(false);
  });
});
