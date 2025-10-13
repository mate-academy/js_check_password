'use strict';

const checkPassword = require('./checkPassword');

describe(`Function 'checkPassword':`, () => {
  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    const result = checkPassword('Password1!');
    expect(typeof result).toBe('boolean');
  });

  it(`should return true for valid password with 8 characters`, () => {
    const result = checkPassword('Abcdef1!');
    expect(result).toBe(true);
  });

  it(`should return true for valid password with 16 characters`, () => {
    const result = checkPassword('Abcdefgh1234!XYZ');
    expect(result).toBe(true);
  });

  it(`should return false for password shorter than 8 characters`, () => {
    const result = checkPassword('Ab1!');
    expect(result).toBe(false);
  });

  it(`should return false for password longer than 16 characters`, () => {
    const result = checkPassword('Abcdefghijklmnop1!');
    expect(result).toBe(false);
  });

  it(`should return false for password without uppercase letter`, () => {
    const result = checkPassword('abcdef1!');
    expect(result).toBe(false);
  });

  it(`should return false for password without digit`, () => {
    const result = checkPassword('Abcdefgh!');
    expect(result).toBe(false);
  });

  it(`should return false for password without special character`, () => {
    const result = checkPassword('Abcdefg1');
    expect(result).toBe(false);
  });

  it(`should return false for password with non-Latin characters`, () => {
    const result = checkPassword('Пароль1!');
    expect(result).toBe(false);
  });

  it(`should return true for password with mix of allowed symbols`, () => {
    const result = checkPassword('XyZ123@#');
    expect(result).toBe(true);
  });
});

