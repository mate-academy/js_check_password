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
    expect(checkPassword('Pass@word1!')).toBe(true);
  });

  it(`should return 'false' for short password`, () => {
    expect(checkPassword('Pass@1!')).toBe(false);
  });

  it(`should return 'false' for long password`, () => {
    expect(checkPassword('Pass@dfgnhgdfhdghmfgfg1!')).toBe(false);
  });

  it(`should return 'false' for password without uppercase letter`, () => {
    expect(checkPassword('pass@word1!')).toBe(false);
  });

  it(`should return 'false' for password without number`, () => {
    expect(checkPassword('Pass@word!')).toBe(false);
  });

  it(`should return 'false' for password without special character`, () => {
    expect(checkPassword('Password2')).toBe(false);
  });
});
