'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');
  const correctPassword = 'P@word1!';

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword(correctPassword)).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword(correctPassword)).toBe(true);
  });

  it('returns "false" for password with not latin alphabet', () => {
    expect(checkPassword('мегаМозг!123')).toBe(false);
  });

  it('returns "false" for too short password', () => {
    expect(checkPassword('dog4')).toBe(false);
  });

  it('returns "false" for password without uppercase letter', () => {
    expect(checkPassword('p@word1!')).toBe(false);
  });

  it('returns "false" for password without digits', () => {
    expect(checkPassword('P@ssword!')).toBe(false);
  });

  it('returns "false" for password without special symbol', () => {
    expect(checkPassword('Password123')).toBe(false);
  });

  it('returns "false" for too long password', () => {
    expect(checkPassword('2LongPassw0rdIsHereForCheck!')).toBe(false);
  });
});
