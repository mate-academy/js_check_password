'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = checkPassword('Password123!');

    expect(typeof result).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    const result = checkPassword('Pass1234!');

    expect(result).toBe(true);
  });

  it(`should return 'false' for the password length < 8 characters`, () => {
    const result = checkPassword('Pass1!');

    expect(result).toBe(false);
  });

  it(`should return 'false' for the password length > 16 characters`, () => {
    const result = checkPassword('Password12345678!');

    expect(result).toBe(false);
  });

  it(`should return 'false' for password without number`, () => {
    const result = checkPassword('Password!');

    expect(result).toBe(false);
  });

  it(`should return 'false' for password without special character`, () => {
    const result = checkPassword('Password123');

    expect(result).toBe(false);
  });

  it(`should return 'false' for password without uppercase letter`, () => {
    const result = checkPassword('password123!');

    expect(result).toBe(false);
  });

  it(`should return 'false' for password with non-Latin characters`, () => {
    const result = checkPassword('Пароль123!');

    expect(result).toBe(false);
  });
});
