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
    expect(checkPassword('Aa1@abcd')).toBe(true);
  });

  it(`should return 'true' for a valid password with 16 characters`, () => {
    expect(checkPassword('J!!jdkfkvjrnfvld')).toBe(true);
  });

  it(`should return 'true' for a valid password
    with special characters`, () => {
    expect(checkPassword('Str@ngPedss1')).toBe(true);
  });

  it(`should return 'false' for a password shorter than 8 characters`, () => {
    expect(checkPassword('Mb1@')).toBe(false);
    expect(checkPassword('Sfr@ng')).toBe(false);
  });

  it(`should return 'false' for a password longer than 16 characters`, () => {
    expect(checkPassword('A1!abcdefghijcdccklmnopq')).toBe(false);
  });

  it(`should return 'false' for a password without an uppercase letter`, () => {
    expect(checkPassword('password1!')).toBe(false);
  });

  it(`should return 'false' for a password without a digit`, () => {
    expect(checkPassword('Password!')).toBe(false);
  });

  it(`should return 'false' for a password without a special character`, () => {
    expect(checkPassword('Password1')).toBe(false);
  });

  it(`should return 'false' for a password with non-Latin characters`, () => {
    expect(checkPassword('パスワード1!')).toBe(false);
    expect(checkPassword('密码123!')).toBe(false);
  });

  it(`should return 'false' for a password with spaces`, () => {
    expect(checkPassword('Pass word1!')).toBe(false);
  });

  it(`should return 'false' for an empty password`, () => {
    expect(checkPassword('')).toBe(false);
  });
});
