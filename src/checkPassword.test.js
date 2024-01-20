'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = checkPassword('AnyPassword123!');

    expect(typeof result).toBe('boolean');
  });

  describe(`Function return 'true' for the valid password`, () => {
    it(`password with 8 characters`, () => {
      const result = checkPassword('Passwo1!');

      expect(result).toBe(true);
    });

    it(`password with 16 characters`, () => {
      const result = checkPassword('AnyPassword123!*');

      expect(result).toBe(true);
    });
  });

  describe(`Function return 'false' for the invalid password`, () => {
    it('password with cyrillic characters', () => {
      const result = checkPassword('SsПароль123!');

      expect(result).toBe(false);
    });

    it('password shorter than 8 characters', () => {
      const result = checkPassword('Short1!');

      expect(result).toBe(false);
    });

    it('password longer than 16 characters', () => {
      const result = checkPassword('TooLongPassword123!');

      expect(result).toBe(false);
    });

    it('password without a digit', () => {
      const result = checkPassword('NoDigit!*');

      expect(result).toBe(false);
    });

    it('password without a lowercase letter', () => {
      const result = checkPassword('NOLOWERCASE1!');

      expect(result).toBe(false);
    });

    it('password without an uppercase letter', () => {
      const result = checkPassword('nouppercase1!');

      expect(result).toBe(false);
    });
  });
});
