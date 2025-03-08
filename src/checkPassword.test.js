'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = checkPassword('Password1!');

    expect(typeof (result)).toBe('boolean');
  });

  it(`should return 'true' for the valid password 
    with 8 characters`, () => {
    const result = checkPassword('Passwo1!');

    expect(result).toEqual(true);
  });

  it(`should return 'true' for the valid password 
    with 9 characters`, () => {
    const result = checkPassword('Passwor1!');

    expect(result).toEqual(true);
  });

  it(`should return 'true' for the valid password 
    with 15 characters`, () => {
    const result = checkPassword('Password!123456');

    expect(result).toEqual(true);
  });

  it(`should return 'true' for the valid password 
    with 16 characters`, () => {
    const result = checkPassword('Password!1234567');

    expect(result).toEqual(true);
  });

  it(`should return 'false' for the password
     with 17 characters`, () => {
    const result = checkPassword('Password!12345678');

    expect(result).toEqual(false);
  });

  it(`should return 'false' for the password 
    with 7 characters`, () => {
    const result = checkPassword('Pass!12');

    expect(result).toEqual(false);
  });

  it(`should return 'false' for the password 
    without 1 digit`, () => {
    const result = checkPassword('Password!');

    expect(result).toEqual(false);
  });

  it(`should return 'false' for the password 
    without 1 special character`, () => {
    const result = checkPassword('Password2');

    expect(result).toEqual(false);
  });

  it(`should return 'false' for the password 
    without 1 uppercase letter`, () => {
    const result = checkPassword('password2');

    expect(result).toEqual(false);
  });

  it(`should return 'false' for the password 
    contains cyrillic letters `, () => {
    const result = checkPassword('Украина!1');

    expect(result).toEqual(false);
  });

  // write more tests here
});
