'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof checkPassword('Password1!')).toBe('boolean');
    expect(typeof checkPassword('qwerty')).toBe('boolean');
  });

  describe('Valid passwords', () => {
    it('should return true for a valid password with required characters', () => {
      expect(checkPassword('Password1!')).toBe(true);
      expect(checkPassword('Abcdef1$')).toBe(true);
      expect(checkPassword('Qwerty9@')).toBe(true);
    });

    it('should return true for passwords of length 8 and 16', () => {
      expect(checkPassword('A1$bCdef')).toBe(true);           // length 8
      expect(checkPassword('A1$bCdefGhijKlmn')).toBe(true);   // length 16
    });
  });

  describe('Invalid passwords', () => {
    it('should return false if too short (<8 characters)', () => {
      expect(checkPassword('A1$bC')).toBe(false);
      expect(checkPassword('Ab1$')).toBe(false);
    });

    it('should return false if too long (>16 characters)', () => {
      expect(checkPassword('A1$bCdefGhijKlmnop')).toBe(false);
    });

    it('should return false if missing digit', () => {
      expect(checkPassword('Password!')).toBe(false);
    });

    it('should return false if missing uppercase letter', () => {
      expect(checkPassword('password1!')).toBe(false);
    });

    it('should return false if missing special character', () => {
      expect(checkPassword('Password1')).toBe(false);
    });

    it('should return false if contains non-Latin letters', () => {
      expect(checkPassword('Пароль1!')).toBe(false);
      expect(checkPassword('Password1!あ')).toBe(false);
    });

    it('should return false for very simple invalid passwords', () => {
      expect(checkPassword('qwerty')).toBe(false);
      expect(checkPassword('Str@ng')).toBe(false);
    });
  });
});
