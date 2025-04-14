'use strict';

describe("Function 'checkPassword':", () => {
  const checkPassword = require('./checkPassword');

  it('should be declared', () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it('should return a boolean', () => {
    expect(typeof checkPassword('Password1!')).toBe('boolean');
  });

  it('should return true for a valid password with 8 characters', () => {
    expect(checkPassword('Passw0rd!')).toBe(true);
  });

  it('should return true for a valid password with 16 characters', () => {
    expect(checkPassword('P@ssword12345678')).toBe(true);
  });

  it('should return false for a password with less than 8 characters', () => {
    expect(checkPassword('Pass1!')).toBe(false);
  });

  it('should return false for a password with more than 16 characters', () => {
    expect(checkPassword('ThisIsTooLongPass1!')).toBe(false);
  });

  it('should return false for a password without a digit', () => {
    expect(checkPassword('Password!')).toBe(false);
  });

  it('should return false for a password without a special character', () => {
    expect(checkPassword('Password1')).toBe(false);
  });

  it('should return false for a password without an uppercase letter', () => {
    expect(checkPassword('password1!')).toBe(false);
  });

  it('should return false for a password with non-Latin characters', () => {
    expect(checkPassword('Пароль1!')).toBe(false);
  });
});
