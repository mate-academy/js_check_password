'use strict';

const checkPassword = require('./checkPassword');

describe('checkPassword', () => {
  test('Valid password (meets all rules)', () => {
    expect(checkPassword('Abcd@123')).toBe(true);
    expect(checkPassword('ValidPass@1')).toBe(true);
  });

  test('is function declared', () => {
    expect(typeof (checkPassword)).toBe('function');
  });

  test('Invalid password (too short)', () => {
    expect(checkPassword('A@1')).toBe(false);
  });

  test('Invalid password (too long)', () => {
    expect(checkPassword('Password12345678@')).toBe(false);
  });

  test('Invalid password (missing digit)', () => {
    expect(checkPassword('Password@')).toBe(false);
  });

  test('Invalid password (missing special character)', () => {
    expect(checkPassword('Password123')).toBe(false);
  });

  test('Invalid password (missing uppercase letter)', () => {
    expect(checkPassword('password@123')).toBe(false);
  });

  test('Invalid password (contains Cyrillic characters)', () => {
    expect(checkPassword('Пароль@123')).toBe(false);
  });

  test('Invalid password (contains spaces)', () => {
    expect(checkPassword('Password @123')).toBe(false);
  });

  test('Invalid password (empty string)', () => {
    expect(checkPassword('')).toBe(false);
  });

  test('Invalid password (only special characters)', () => {
    expect(checkPassword('@#$%^&*')).toBe(false);
  });
});
