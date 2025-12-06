'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const isPasswordValid = checkPassword('P@ssword1!');

    expect(typeof isPasswordValid).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    const isPasswordValid = checkPassword('Pass1!Ab');

    expect(isPasswordValid).toBe(true);
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    const isPasswordValid = checkPassword('Password1234567!');

    expect(isPasswordValid).toBe(true);
  });

  it(`should return 'false' for the invalid password
     with more than 16 characters`, () => {
    const isPasswordValid = checkPassword('Password1fhrfherhfhwbefhve!');

    expect(isPasswordValid).toBe(false);
  });

  it(`should return 'false' for the invalid password
     with less than 8 characters`, () => {
    const isPasswordValid = checkPassword('Str@ng');

    expect(isPasswordValid).toBe(false);
  });

  it(`should return 'false' for the invalid password
     without at least one digit`, () => {
    const isPasswordValid = checkPassword('Password!');

    expect(isPasswordValid).toBe(false);
  });

  it(`should return 'false' for the invalid password
     without at least one special character`, () => {
    const isPasswordValid = checkPassword('Password1');

    expect(isPasswordValid).toBe(false);
  });

  it(`should return 'false' for the invalid password
     without at least one uppercase letter`, () => {
    const isPasswordValid = checkPassword('password1!');

    expect(isPasswordValid).toBe(false);
  });

  it(`should return 'false' for the invalid password
     with Cyrillic letters`, () => {
    const isPasswordValid = checkPassword('Passвord1!');

    expect(isPasswordValid).toBe(false);
  });
});
