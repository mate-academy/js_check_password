'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = checkPassword('Password1!');

    expect(typeof result).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Pass1!aa')).toBe(true);
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('Password1!AaBbCc')).toBe(true);
  });

  it('should return false for a password shorter than 7 characters', () => {
    expect(checkPassword('Pass1!a')).toBe(false);
  });

  it('should return false for a password longer than 17 characters', () => {
    expect(checkPassword('Password1!AaBbCcD')).toBe(false);
  });

  it('should return false for a password without a digit', () => {
    expect(checkPassword('Password!')).toBe(false);
  });

  it('should return false for a password without an uppercase letter', () => {
    expect(checkPassword('password1!')).toBe(false);
  });

  it('Return true for a password with at least one uppercase letter', () => {
    expect(checkPassword('Password1!')).toBe(true);
  });

  it('should return false for a password without a special character', () => {
    expect(checkPassword('Password1')).toBe(false);
  });

  it('should return false for a password containing a space', () => {
    expect(checkPassword('Password 1!')).toBe(false);
  });

  it('should return false for a password containing Cyrillic chars', () => {
    expect(checkPassword('Password1!АБ')).toBe(false); // 'АБ' Cyrillic chars
  });
});
