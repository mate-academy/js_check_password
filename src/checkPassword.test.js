'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('Password1!')).toBe(
      'boolean'
    );
  });

  it('should return false if password is empty', () => {
    expect(checkPassword('')).toBe(false);
  });

  it('should return true for valid 8-char password', () => {
    expect(checkPassword('Abcdef1!')).toBe(true);
  });

  it('should return true for valid 16-char password', () => {
    expect(checkPassword('Abcdef1!Abcdef1!')).toBe(true);
  });

  it('should return false if password is less than 8 characters', () => {
    expect(checkPassword('Abc1!')).toBe(false);
  });

  it('should return false if password is more than 16 characters', () => {
    expect(checkPassword('Abcdef1!Abcdef1!Abcdef1!')).toBe(
      false
    );
  });

  it('should return false if no digits', () => {
    expect(checkPassword('Abcdef!!')).toBe(false);
  });

  it('should return false if no special characters', () => {
    expect(checkPassword('Abcdef12')).toBe(false);
  });

  it('should return false if no uppercase letters', () => {
    expect(checkPassword('abcdef1!')).toBe(false);
  });

  it('should return false if contains cyrillic characters', () => {
    expect(checkPassword('Пароль1!')).toBe(false);
    expect(checkPassword('Password1!П')).toBe(false);
  });
});
