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
    expect(checkPassword('Passwo1!')).toBe(true);
  });

  it('should return true for valid password', () => {
    expect(checkPassword('Password1!')).toBe(true);
  });

  it('should return false for password shorter than 8 characters', () => {
    expect(checkPassword('Str@1')).toBe(false);
  });

  it('should return false for password longer than 16 characters', () => {
    expect(checkPassword('Password123456789!')).toBe(false);
  });

  it('should return false for password without number', () => {
    expect(checkPassword('Password!')).toBe(false);
  });

  it('should return false for password without special character', () => {
    expect(checkPassword('Password1')).toBe(false);
  });

  it('should return false for password without uppercase letter', () => {
    expect(checkPassword('password1!')).toBe(false);
  });

  it('should return false for password without lowercase letter', () => {
    expect(checkPassword('PASSWORD1!')).toBe(false);
  });

  it('should return false for password with spaces', () => {
    expect(checkPassword('Pass word1!')).toBe(false);
  });

  it('should return false for password with Cyrillic characters', () => {
    expect(checkPassword('ValidПароль1!')).toBe(false);
  });

  it('should return false for simple invalid password', () => {
    expect(checkPassword('qwerty')).toBe(false);
  });

  it('should return false for short strong-looking password', () => {
    expect(checkPassword('Str@ng')).toBe(false);
  });
});
