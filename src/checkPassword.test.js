'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('Password1!')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Passw1!a')).toBe(true);
  });

  it(`should return 'true' for valid password with 16 characters`, () => {
    expect(checkPassword('Abcdef1!GhijklmN')).toBe(true);
  });

  it(`should return 'false' for password less than 8 characters`, () => {
    expect(checkPassword('P@1aB')).toBe(false);
  });

  it(`should return 'false' for password longer than 16 characters`, () => {
    expect(checkPassword('Password1!Password1!')).toBe(false);
  });

  it(`should return 'false' if missing digit`, () => {
    expect(checkPassword('Password!')).toBe(false);
  });

  it(`should return 'false' if missing uppercase letter`, () => {
    expect(checkPassword('password1!')).toBe(false);
  });

  it(`should return 'false' if missing special character`, () => {
    expect(checkPassword('Password1')).toBe(false);
  });

  it(`should return 'false' if contains spaces`, () => {
    expect(checkPassword('Password 1!')).toBe(false);
  });

  it(`should return 'false' if contains Cyrillic letters`, () => {
    expect(checkPassword('Passwоrd1!')).toBe(false); // 'о' is Cyrillic o here
  });

  it(`should return 'true' for valid complex password`, () => {
    expect(checkPassword('Ab1!xYz$')).toBe(true);
  });

  it(`should return 'false' for empty string`, () => {
    expect(checkPassword('')).toBe(false);
  });
});
