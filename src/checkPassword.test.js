'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Password1!')).toBe(true);
  });

  it(`should return 'true' for the password with Latin characters`, () => {
    expect(checkPassword('Qwertyu1!')).toBe(true);
  });

  it(`should return 'false' for the password with Cyrillic characters`, () => {
    expect(checkPassword(' ЙЦУКЕНГ1!')).toBe(false);
  });

  it(`should return 'false' for the password with 17 characters`, () => {
    expect(checkPassword('QWERTYUIOPASDFG1!')).toBe(false);
  });

  it(`should return 'false' for the password with 9 characters
  without digit`, () => {
    expect(checkPassword('Qwertyui!')).toBe(false);
  });

  it(`should return 'false' for the password with 9 characters
  without 1 special character`, () => {
    expect(checkPassword('Qwertyui1')).toBe(false);
  });

  it(`should return 'false' for the password with 10 characters
  without uppercase letter`, () => {
    expect(checkPassword('qwertyui1!')).toBe(false);
  });
});
