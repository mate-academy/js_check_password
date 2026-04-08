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

  it(`should return 'true' for valid password`, () => {
    expect(checkPassword('Password1!')).toBe(true);
  });

  it(`should return 'true' for password without lowercase letters`, () => {
    expect(checkPassword('PASSWORD1!')).toBe(true);
  });

  it(`should return 'true' for valid password with exactly 16 characters`, () => {
    expect(checkPassword('Password1234!Abc')).toBe(true);
  });

  it(`should return 'false' for password shorter than 8 characters`, () => {
    expect(checkPassword('Str@ng')).toBe(false);
  });

  it(`should return 'false' for password longer than 16 characters`, () => {
    expect(checkPassword('Password12345678!')).toBe(false);
  });

  it(`should return 'false' if password has no uppercase letter`, () => {
    expect(checkPassword('password1!')).toBe(false);
  });

  it(`should return 'false' if password has no digit`, () => {
    expect(checkPassword('Password!')).toBe(false);
  });

  it(`should return 'false' if password has no special character`, () => {
    expect(checkPassword('Password1')).toBe(false);
  });

  it(`should return 'false' if password contains spaces`, () => {
    expect(checkPassword('Password 1!')).toBe(false);
  });

  it(`should return 'false' if password contains cyrillic letters`, () => {
    expect(checkPassword('Пароль1!A')).toBe(false);
  });

  it(`should return 'false' for simple invalid password`, () => {
    expect(checkPassword('qwerty')).toBe(false);
  });
});
