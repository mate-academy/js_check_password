'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {

  });

  it(`should return 'true' for the valid password with 8 characters`, () => {

  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('A1!bcdefghijklmn')).toBe(true);
  });

  it(`should return 'false' for a password shorter than 8 characters`, () => {
    expect(checkPassword('A1!bcdw')).toBe(false);
  });

  it(`should return 'false' for a password longer than 16 characters`, () => {
    expect(checkPassword('A1!bcdefghijklmnopq')).toBe(false);
  });

  it(`should return 'false' for a password without a digit`, () => {
    expect(checkPassword('Password!')).toBe(false);
  });

  it(`should return 'false' for a password without a special character`, () => {
    expect(checkPassword('Password1')).toBe(false);
  });

  it(`should return 'false' for a password without an uppercase letter`, () => {
    expect(checkPassword('password1!')).toBe(false);
  });

  it(`should return 'false' for a password containing non-Latin characters`,
    () => {
      expect(checkPassword('Пароль1!2')).toBe(false);
    });

  it(`should return 'false' for an empty string`, () => {
    expect(checkPassword('')).toBe(false);
  });

  it(`should return 'false' for a password with spaces`, () => {
    expect(checkPassword('Password 1!')).toBe(false);
  });

  it(`should return 'true' for a valid password with exactly 8 characters`,
    () => {
      expect(checkPassword('A1!bcdef')).toBe(true);
    });

  it(`should always return a boolean`, () => {
    expect(typeof checkPassword('Password1!')).toBe('boolean');
    expect(typeof checkPassword('invalid')).toBe('boolean');
    expect(typeof checkPassword('')).toBe('boolean');
  });
});
