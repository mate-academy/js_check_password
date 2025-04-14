/* eslint-disable max-len */
'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('Myfriend22')).toBe('boolean');
  });

  it(`should return 'true' for a valid password with 8 characters`, () => {
    const result = checkPassword('Pass1@wd');

    expect(result).toBe(true);
  });

  it(`should return 'true' for a valid password with 16 characters`, () => {
    const result = checkPassword('Valid1@Password');

    expect(result).toBe(true);
  });

  it(`should return 'false' for a password shorter than 8 characters`, () => {
    const result = checkPassword('P@1a');

    expect(result).toBe(false);
  });

  it(`should return 'false' for a password longer than 16 characters`, () => {
    const result = checkPassword('TooLongPassword1@');

    expect(result).toBe(false);
  });

  it(`should return 'false' for a password without an uppercase letter`, () => {
    const result = checkPassword('nouppercase1@');

    expect(result).toBe(false);
  });

  it(`should return 'false' for a password without a number`, () => {
    const result = checkPassword('NoNumber!');

    expect(result).toBe(false);
  });

  it(`should return 'false' for a password containing Cyrillic characters`, () => {
    const result = checkPassword('Пароль1!');

    expect(result).toBe(false);
  });

  it(`should return 'false' for a password without a special character`, () => {
    const result = checkPassword('NoSpecial1');

    expect(result).toBe(false);
  });
});
