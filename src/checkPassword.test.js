'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof checkPassword('Password1!')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Passwo1!')).toBe(true);
  });

  it(`should return 'false' for the password 
  with not Latin alphabet characters`, () => {
    expect(checkPassword('PasswПrd1!')).toBe(false);
  });

  it(`should return 'false' for the password with 7 characters`, () => {
    expect(checkPassword('Pasrd1!')).toBe(false);
  });

  it(`should return 'true' for the valid password with 9 characters`, () => {
    expect(checkPassword('Pasword1!')).toBe(true);
  });

  it(`should return 'true' for the valid password with 15 characters`, () => {
    expect(checkPassword('Pass1234567890!')).toBe(true);
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('Pass12345678900!')).toBe(true);
  });

  it(`should return 'false' for the password with 17 characters`, () => {
    expect(checkPassword('Pass123456789000!')).toBe(false);
  });

  it(`should return 'false' for the password 
  with 8 characters, 1 special character, 1 uppercase letter
   and without digit`, () => {
    expect(checkPassword('Pasword!')).toBe(false);
  });

  it(`should return 'false' for the password 
  with 8 characters, 1 digit, 1 uppercase letter 
  and without special character`, () => {
    expect(checkPassword('Pasword1')).toBe(false);
  });

  it(`should return 'false' for the password 
  with 8 characters, 1 digit, 1 special character and without uppercase letter 
  `, () => {
    expect(checkPassword('Pasword1')).toBe(false);
  });
});
