'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('Password!1')).toBe('boolean');
  });

  it(`should return 'false' for the password with cyrrilic letters`, () => {
    expect(checkPassword('Пароль1!')).toBe(false);
  });

  it(`should return 'false' for short password`, () => {
    expect(checkPassword('P!1')).toBe(false);
  });

  it(`should return 'false' for password with 7 characters`, () => {
    expect(checkPassword('Pass!12')).toBe(false);
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('P@ssw0rd')).toBe(true);
  });

  it(`should return 'true' for password with 16 characters`, () => {
    expect(checkPassword('Password@word012')).toBe(true);
  });

  it(`should return 'false' for password with 17 characters`, () => {
    expect(checkPassword('P@ssword.pass!123')).toBe(false);
  });

  it(`should return 'false' for password without digit`, () => {
    expect(checkPassword('P@ssword')).toBe(false);
  });

  it(`should return 'false' for password without special character`, () => {
    expect(checkPassword('Passw0rd')).toBe(false);
  });

  it(`should return 'false' for password without uppercase letter`, () => {
    expect(checkPassword('passw0rd!')).toBe(false);
  });

  it(`should return 'false' for password with spaces`, () => {
    expect(checkPassword('P@ss w0rd')).toBe(false);
  });
});
