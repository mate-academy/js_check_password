'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = checkPassword('password');

    expect(typeof result).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    const result = checkPassword('Password1!');

    expect(result).toBe(true);
  });

  it(`should return 'false' for an empty password`, () => {
    const result = checkPassword('');

    expect(result).toBe(false);
  });

  it(`should return 'false' for a password without a digit`, () => {
    const result = checkPassword('Password!');

    expect(result).toBe(false);
  });

  it(`should return 'false' for a password without a lowercase letter`, () => {
    const result = checkPassword('PASSWORD1!');

    expect(result).toBe(false);
  });

  it(`should return 'false' for a password without an uppercase letter`, () => {
    const result = checkPassword('password1!');

    expect(result).toBe(false);
  });

  it(`should return 'false' for a password without a special character`, () => {
    const result = checkPassword('Password1');

    expect(result).toBe(false);
  });

  it(`should return 'false' for a password with Cyrillic characters`, () => {
    const result = checkPassword('Пароль1!');

    expect(result).toBe(false);
  });

  it(`should return 'false' for a password shorter than 8 characters`, () => {
    const result = checkPassword('Pass1!');

    expect(result).toBe(false);
  });

  it(`should return 'false' for a password longer than 16 characters`, () => {
    const result = checkPassword('ThisIsALongPassword1!');

    expect(result).toBe(false);
  });
});
