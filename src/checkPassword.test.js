'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const isValid = checkPassword('Password1!');

    expect(typeof isValid).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    const validPassword = 'Qwerty1!';
    const isValid = checkPassword(validPassword);

    expect(isValid).toBe(true);
  });

  it(`should return 'false' for a password without a special character`, () => {
    const invalidPassword = 'Password123';
    const isValid = checkPassword(invalidPassword);

    expect(isValid).toBe(false);
  });

  it(`should return 'false' for a password without an uppercase letter`, () => {
    const invalidPassword = 'password1!';
    const isValid = checkPassword(invalidPassword);

    expect(isValid).toBe(false);
  });

  it(`should return 'false' for a password without a digit`, () => {
    const invalidPassword = 'Password!';
    const isValid = checkPassword(invalidPassword);

    expect(isValid).toBe(false);
  });

  it(`should return 'false' for a password with less than 8 characters`, () => {
    const invalidPassword = 'Pass1!';
    const isValid = checkPassword(invalidPassword);

    expect(isValid).toBe(false);
  });

  it(`should return 'false' for a password with Cyrillic characters`, () => {
    const invalidPassword = 'Пароль123!';
    const isValid = checkPassword(invalidPassword);

    expect(isValid).toBe(false);
  });

  it(`should return 'false' for a password with more
  than 16 characters`, () => {
    const invalidPassword = 'GiantMegaPassword123&#!';
    const isValid = checkPassword(invalidPassword);

    expect(isValid).toBe(false);
  });
});
