'use strict';

const checkPassword = require('./checkPassword');

describe('checkPassword', () => {
  test('returns true for a valid password', () => {
    expect(checkPassword('Password1!')).toBe(true);
  });

  test('returns false for a password without a digit', () => {
    expect(checkPassword('Password!')).toBe(false);
  });

  test('returns false for a password without a special character', () => {
    expect(checkPassword('Password1')).toBe(false);
  });

  test('returns false for a password without an uppercase letter', () => {
    expect(checkPassword('password1!')).toBe(false);
  });

  test('returns false for a password less than 8 characters', () => {
    expect(checkPassword('Str@ng')).toBe(false);
  });

  test('returns false for a password more than 16 characters', () => {
    expect(checkPassword('VeryLongPassword1!')).toBe(false);
  });

  test('returns false for a password with non-Latin characters', () => {
    expect(checkPassword('Пароль1!')).toBe(false);
  });

  test('returns false for a password with spaces', () => {
    expect(checkPassword('Pass word1!')).toBe(false);
  });
});
