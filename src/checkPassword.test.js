/* eslint-disable max-len */
'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = checkPassword('Password1!');

    expect(typeof result).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    const result = checkPassword('Password1!');

    expect(result).toBe(true);
  });

  it(`should return 'false' for the invalid password with less than 8 characters`, () => {
    const result = checkPassword('Str@ng');

    expect(result).toBe(false);
  });

  it(`should return 'false' for the invalid password without special characters`, () => {
    const result = checkPassword('Password1');

    expect(result).toBe(false);
  });

  it(`should return 'false' for the invalid password without uppercase letters`, () => {
    const result = checkPassword('password1!');

    expect(result).toBe(false);
  });

  it(`should return 'false' for the invalid password without digits`, () => {
    const result = checkPassword('Password!');

    expect(result).toBe(false);
  });

  it(`should return 'false' for the invalid password with more than 16 characters`, () => {
    const result = checkPassword('Password1234567890!');

    expect(result).toBe(false);
  });
});
