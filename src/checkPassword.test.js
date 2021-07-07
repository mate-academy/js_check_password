'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('test')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Fairly2.')).toBeTruthy();
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('Ridiculousness2.')).toBeTruthy();
  });

  it(`should return 'false' for the password without digit`, () => {
    expect(checkPassword('Cinderella@')).toBeFalsy();
  });

  it(`should return 'false' for the password without special character`, () => {
    expect(checkPassword('Cinderella4')).toBeFalsy();
  });

  it(`should return 'false' for the password without uppercase letter`, () => {
    expect(checkPassword('cinderella@4')).toBeFalsy();
  });

  it(`should return 'false' for the password with 5 characters`, () => {
    expect(checkPassword('Air8@')).toBeFalsy();
  });

  it(`should return 'false' for the password with 19 characters`, () => {
    expect(checkPassword('Conceptualisation6@')).toBeFalsy();
  });

  it(`should return 'false' for the empty value in field "password"`, () => {
    expect(checkPassword('')).toBeFalsy();
  });
});
