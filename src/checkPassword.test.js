'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('P@ssword1!')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('P@ssword1!')).toBe(true);
  });

  it(`should return 'false' if the password length < 8`, () => {
    expect(checkPassword('P@s1!')).toBe(false);
  });

  it(`should return 'false' if the password length > 16`, () => {
    expect(checkPassword('P@ssword12345678!')).toBe(false);
  });

  it(`should return 'false' if not includes 1 uppercase letter`, () => {
    expect(checkPassword('p@ssword1!')).toBe(false);
  });

  it(`should return 'false' if not includes 1 digit`, () => {
    expect(checkPassword('P@ssword!')).toBe(false);
  });

  it(`should return 'false' if not includes 1 special character`, () => {
    expect(checkPassword('Password1')).toBe(false);
  });

  it(`should return 'false' if includes non-English letters`, () => {
    expect(checkPassword('P@ssworд1!')).toBe(false);
  });
});
