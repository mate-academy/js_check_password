'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('P@ssword1')).toBe('boolean');
  });

  it(`should return true for a valid password with 8 characters`, () => {
    expect(checkPassword('P@ssw0rd')).toBe(true);
  });

  it(`should return true for a valid password with 16 characters`, () => {
    expect(
      checkPassword('P@ssw0rd123!ABCD'),
    ).toBe(true);
  });

  it(`should return false for password shorter than 8 characters`, () => {
    expect(checkPassword('P@ss1!')).toBe(false);
  });

  it(`should return false for password longer than 16 characters`, () => {
    expect(
      checkPassword('P@ssword1234567890!'),
    ).toBe(false);
  });

  it(`should return false if password has no uppercase letter`, () => {
    expect(checkPassword('p@ssword1')).toBe(false);
  });

  it(`should return false if password has no lowercase letter`, () => {
    expect(checkPassword('P@SSWORD1')).toBe(false);
  });

  it(`should return false if password has no digit`, () => {
    expect(checkPassword('Password!')).toBe(false);
  });

  it(`should return false if password has no special character`, () => {
    expect(checkPassword('Password1')).toBe(false);
  });

  it(`should return false if password contains whitespace`, () => {
    expect(checkPassword('P@ss word1')).toBe(false);
  });

  it(`should return false if password contains cyrillic characters`, () => {
    expect(checkPassword('P@ssворд1')).toBe(false);
  });

  it(
    `should return true for password with special characters `
    + `and mixed case`,
    () => {
      expect(checkPassword('A1@bC2#d')).toBe(true);
    },
  );
});
