'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('password') === 'boolean').toBeTruthy();
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('P@ssword1')).toBe(true);
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('P@ssword1passwor')).toBe(true);
  });

  it(`should return false for password without special character`, () => {
    expect(checkPassword('Password1')).toBe(false);
  });

  it(`should return false for password without digit`, () => {
    expect(checkPassword('P@ssword')).toBe(false);
  });

  it(`should return false for password without uppercase letter`, () => {
    expect(checkPassword('p@ssword1')).toBe(false);
  });

  it.skip(`should return false for password with invalid letter`, () => {
    expect(checkPassword('P@sswórd1')).toBe(false);
  });

  it(`should return false if password is too short`, () => {
    expect(checkPassword('P@ssw1')).toBe(false);
  });

  it(`should return false if password is too long`, () => {
    expect(checkPassword('P@sswordpassword1')).toBe(false);
  });
});
