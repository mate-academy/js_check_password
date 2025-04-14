/* eslint-disable max-len */
'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('P@ssword1')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    const result = checkPassword('P@sswor1');

    expect(result).toBe(true);
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    const result = checkPassword('SomeP@ssword1234');

    expect(result).toBe(true);
  });

  it(`should return 'true' for the valid password with more then 8 and less then 16 characters`, () => {
    const result = checkPassword('SomeP@ssword1');

    expect(result).toBe(true);
  });

  it(`should return 'false' for the password with less then 8 characters`, () => {
    const result = checkPassword('P@ss1');

    expect(result).toBe(false);
  });

  it(`should return 'false' for the password with more then 16 characters`, () => {
    const result = checkPassword('P@sswordVeryLong123');

    expect(result).toBe(false);
  });

  it(`should return 'false' for the password without number`, () => {
    const result = checkPassword('P@ssword');

    expect(result).toBe(false);
  });

  it(`should return 'false' for the password without special character`, () => {
    const result = checkPassword('Password1');

    expect(result).toBe(false);
  });

  it(`should return 'false' for the password without uppercase letter`, () => {
    const result = checkPassword('password1');

    expect(result).toBe(false);
  });
});
