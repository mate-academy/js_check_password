'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should return boolean`, () => {
    expect(typeof checkPassword('Password1!')).toBe('boolean');
  });

  it(`should return 'true' for a valid password with 8 characters`, () => {
    expect(checkPassword('Pass1!@a')).toBe(true);
  });

  it(`should return 'true' for a valid password with 16 characters`, () => {
    expect(checkPassword('ValidP@ssword12!')).toBe(true);
  });

  it(`should return 'false' for a password shorter than 8 characters`, () => {
    expect(checkPassword('Pass1!')).toBe(false);
  });

  it(`should return 'false' for a password longer than 16 characters`, () => {
    expect(checkPassword('VeryLongPassword123!')).toBe(false);
  });

  it(`should return 'false' if the password does not contain
    at least one uppercase letter`, () => {
    expect(checkPassword('password1!')).toBe(false);
  });

  it(`should return 'false' if the password does not contain
    at least one digit`, () => {
    expect(checkPassword('Password!')).toBe(false);
  });

  it(`should return 'false' if the password does not
    contain at least one special character`, () => {
    expect(checkPassword('Password1')).toBe(false);
  });

  it(`should return 'false' if the password contains non-Latin letters`, () => {
    expect(checkPassword('Пароль1!')).toBe(false);
  });

  it(`should return 'false' for an empty password`, () => {
    expect(checkPassword('')).toBe(false);
  });

  it(`should return 'false' for a password with spaces`, () => {
    expect(checkPassword('Pass 1!')).toBe(false);
  });
});
