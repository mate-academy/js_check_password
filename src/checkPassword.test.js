'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('Password1!')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Pass1!ab')).toBe(true);
  });

  it(`should return 'true' for valid password with 16 characters`, () => {
    expect(checkPassword('Password1!abcdef')).toBe(true);
  });

  it(`should return 'true' for example valid password`, () => {
    expect(checkPassword('Password1!')).toBe(true);
  });

  it(`should return 'false' for password shorter than 8 characters`, () => {
    expect(checkPassword('Pass1!')).toBe(false);
  });

  it(`should return 'false' for password longer than 16 characters`, () => {
    expect(checkPassword('Password1!abcdefg')).toBe(false);
  });

  it(`should return 'false' for password without digit`, () => {
    expect(checkPassword('Password!abcdefg')).toBe(false);
  });

  it(`should return 'false' for password without special character`, () => {
    expect(checkPassword('Password1abcdefg')).toBe(false);
  });

  it(`should return 'false' for password without uppercase letter`, () => {
    expect(checkPassword('password1!abcdef')).toBe(false);
  });

  it(`should return 'false' for password with space`, () => {
    expect(checkPassword('Password 1!')).toBe(false);
  });

  it(`should return 'false' for 'qwerty'`, () => {
    expect(checkPassword('qwerty')).toBe(false);
  });

  it(`should return 'false' for 'Str@ng'`, () => {
    expect(checkPassword('Str@ng')).toBe(false);
  });

  it(`should return 'false' for password with cyrillic characters`, () => {
    expect(checkPassword('Пароль1!abc')).toBe(false);
  });
});
