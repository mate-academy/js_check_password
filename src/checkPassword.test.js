'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('')).toBe(typeof true);
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Passwor1!')).toBe(true);
  });

  it(`should return 'false' for the password with 7 characters`, () => {
    expect(checkPassword('Paswo1!')).toBe(false);
  });

  it(`should return 'false' for the password with 3 characters`, () => {
    expect(checkPassword('P1!')).toBe(false);
  });

  it(`should return 'false' for the empty password`, () => {
    expect(checkPassword('')).toBe(false);
  });

  it(`should return 'true' for the valid password with 13 characters`, () => {
    expect(checkPassword('Passswwword1!')).toBe(true);
  });

  it(`should return 'true' for the valid password with 15 characters`, () => {
    expect(checkPassword('Paaassswwword1!')).toBe(true);
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('Paaassswwwordd1!')).toBe(true);
  });

  it(`should return 'false' for the password with 17 characters`, () => {
    expect(checkPassword('Paaasdsswwwordd1!')).toBe(false);
  });

  it(`should return 'false' for the password with 20 characters`, () => {
    expect(checkPassword('Paaassswwwordddfdd1!')).toBe(false);
  });

  it(`should return 'false' for the password with no number`, () => {
    expect(checkPassword('Password!')).toBe(false);
  });

  it(`should return 'false' for the password with no special character`, () => {
    expect(checkPassword('Password1')).toBe(false);
  });

  it(`should return 'false' for the password with no uppercase letter`, () => {
    expect(checkPassword('password1!')).toBe(false);
  });
});
