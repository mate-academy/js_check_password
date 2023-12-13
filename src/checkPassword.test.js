/* eslint-disable max-len */
'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = checkPassword('P@ssword1');

    expect(typeof result).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    const result = checkPassword('P@ss1234');

    expect(result).toBe(true);
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    const result = checkPassword('P@ssw0rd12345678');

    expect(result).toBe(true);
  });

  it(`should return 'false' for the password with less than 8 characters`, () => {
    const result = checkPassword('Passw0!');

    expect(result).toBe(false);
  });

  it(`should return 'false' for the password with more than 16 characters`, () => {
    const result = checkPassword('P@ssw0rd123456789');

    expect(result).toBe(false);
  });

  it(`should return 'false' for the password without a digit`, () => {
    const result = checkPassword('P@ssword!');

    expect(result).toBe(false);
  });

  it(`should return 'false' for the password without a special character`, () => {
    const result = checkPassword('Password1234');

    expect(result).toBe(false);
  });

  it(`should return 'false' for the password without an uppercase letter`, () => {
    const result = checkPassword('password?12345');

    expect(result).toBe(false);
  });
});
