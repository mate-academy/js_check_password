'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('1234567890')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Password1!')).toBe(true);
  });

  it('returns false for too-short, lowercase-only password', () => {
    expect(checkPassword('qwerty')).toBe(false);
  });

  it(`should return false for short mixed-case password with symbol`, () => {
    expect(checkPassword('Str@ng')).toBe(false);
  });

  it(`should return false for too short`, () => {
    expect(checkPassword('Str@')).toBe(false);
  });

  it(`should return false for too long`, () => {
    expect(checkPassword('lkjdflihQ21kjfnaljk@')).toBe(false);
  });

  it(`should return false for password without digit`, () => {
    expect(checkPassword('Password!!!')).toBe(false);
  });

  it(`should return false for password without uppercase letter`, () => {
    expect(checkPassword('password1!')).toBe(false);
  });

  it(`should return false for password without special character`, () => {
    expect(checkPassword('Password1')).toBe(false);
  });

  it(`should return false for password with not allowed character`, () => {
    expect(checkPassword('пароль1!')).toBe(false);
  });
});
