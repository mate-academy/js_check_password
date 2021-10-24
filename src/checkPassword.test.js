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
    expect(checkPassword('Valid_p8')).toBeTruthy();
  });

  // write more tests here
  it(`should return 'false' for the password with 7 characters`, () => {
    expect(checkPassword('Valid_8')).toBeFalsy();
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('Valid_password88')).toBeTruthy();
  });

  it(`should return 'false' for the password with 17 characters`, () => {
    expect(checkPassword('Valid_password888')).toBeFalsy();
  });

  it(`should return 'false' for the password without number`, () => {
    expect(checkPassword('Valid_password')).toBeFalsy();
  });

  it(`should return 'false' for the password without special character`, () => {
    expect(checkPassword('Validpassword8')).toBeFalsy();
  });

  it(`should return 'false' for the password without uppercase letter`, () => {
    expect(checkPassword('valid_password8')).toBeFalsy();
  });

  it(`should return 'false' for the password with non-Latin character`, () => {
    expect(checkPassword('Valiд_password8')).toBeFalsy();
  });
});
