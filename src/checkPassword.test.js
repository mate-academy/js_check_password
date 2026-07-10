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
    expect(checkPassword('Password1!')).toBe(true);
  });

  it(`should return 'false' for a short password without special characters (qwerty)`, () => {
    expect(checkPassword('qwerty')).toBe(false);
  });

  it(`should return 'false' for a password that lacks numbers or sufficient length (Str@ng)`, () => {
    expect(checkPassword('Str@ng')).toBe(false);
  });

  it(`should return 'false' if the password is just below the minimum length (7 characters)`, () => {
    expect(checkPassword('P@ss123')).toBe(false);
  });

  it(`should return 'true' if the password is exactly at the minimum length boundary (8 characters)`, () => {
    expect(checkPassword('P@ssord1')).toBe(true);
  });

  it(`should return 'false' if the password lacks an uppercase letter`, () => {
    expect(checkPassword('p@ssword1!')).toBe(false);
  });

  it(`should return 'false' if the password lacks a lowercase letter`, () => {
    expect(checkPassword('PASSWORD1!')).toBe(false);
  });

  it(`should return 'false' if the password lacks a digit`, () => {
    expect(checkPassword('Password!!')).toBe(false);
  });

  it(`should return 'false' if the password lacks a special character`, () => {
    expect(checkPassword('Password123')).toBe(false);
  });

  it(`should return 'false' if the password contains Cyrillic characters`, () => {
    expect(checkPassword('Пароль123!')).toBe(false);
  });

  it(`should return 'false' if a valid Latin password contains even one Cyrillic letter`, () => {
    expect(checkPassword('Pаssword1!')).toBe(false);
  });

  it(`should return 'true' if the password is exactly at the maximum length boundary (16 characters)`, () => {
    expect(checkPassword('P@ssword12345678')).toBe(true);
  });

  it(`should return 'false' if the password exceeds the maximum length (17 characters)`, () => {
    expect(checkPassword('P@ssword123456789')).toBe(false);
  });
});
