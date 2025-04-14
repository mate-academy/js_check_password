'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('')).toBe('boolean');
  });

  it(`should return 'false' for password with non-Latin character`, () => {
    expect(checkPassword('Pяssword1!')).toBe(false);
  });

  it(`should return 'false' for password without any uppercase char`, () => {
    expect(checkPassword('password1!')).toBe(false);
  });

  it(`should return 'false' for password without any digit`, () => {
    expect(checkPassword('Password!')).toBe(false);
  });

  it(`should return 'false' for password without any special char`, () => {
    expect(checkPassword('Password1')).toBe(false);
  });

  it(`should return 'false' for too weak password`, () => {
    expect(checkPassword('Passw1!')).toBe(false);
  });

  it(`should return 'false' for too long password`, () => {
    expect(checkPassword('P@ssword123456789')).toBe(false);
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Passwo1!')).toBe(true);
  });
});
