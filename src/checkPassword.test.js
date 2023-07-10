'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {

  });

  it(`should return 'true' for the valid password with 8 characters`, () => {

  });

  // write more tests here
  it(`should return 'false' for the password with 7 characters`, () => {
    expect(checkPassword('Validat')).toBe(false);
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('Valid_password88')).toBe(true);
  });

  it(`should return 'false' for the password with 17 characters`, () => {
    expect(checkPassword('Valid_password888')).toBe(false);
  });

  it(`should return 'false' for the password without number`, () => {
    expect(checkPassword('Valid_password')).toBe(false);
  });

  it(`should return 'false' for the password without special character`, () => {
    expect(checkPassword('Validpassword8')).toBe(false);
  });

  it(`should return 'false' for the password without uppercase letter`, () => {
    expect(checkPassword('valid_password8')).toBe(false);
  });

  it(`should return 'false' for the password with non-Latin character`, () => {
    expect(checkPassword('Фalid_password8')).toBe(false);
  });
});
