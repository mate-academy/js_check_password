'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword.js');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('password123')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Asdfgh1!')).toBe(true);
  });

  it(`should return 'true' for the valid password`, () => {
    expect(checkPassword('Password1!')).toBe(true);
  });

  it(`should return 'false' for password with less than 8 characters`, () => {
    expect(checkPassword('Qwer1!')).toBe(false);
  });

  it(`should return false for invalid password`, () => {
    expect(checkPassword('Str@ng')).toBe(false);
  });

  it(`should return false for password with more than 16 characters`, () => {
    expect(checkPassword('Mypassword123!@#$')).toBe(false);
  });

  it(`should return true for valid password with 16 characters`, () => {
    expect(checkPassword('Mypassword123!@#')).toBe(true);
  });

  it(`should return false for password with no uppercase`, () => {
    expect(checkPassword('password123$')).toBe(false);
  });

  it(`should return false for password with no number`, () => {
    expect(checkPassword('password!')).toBe(false);
  });

  it(`should return false for password with no special character`, () => {
    expect(checkPassword('Password123')).toBe(false);
  });

  it(`should return false for password with no Latin alphabet`, () => {
    expect(checkPassword('Рывок123!!')).toBe(false);
  });
});
