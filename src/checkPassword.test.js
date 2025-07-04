'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it('should return true for a valid password', () => {
    expect(checkPassword('Password1!')).toBe(true);
  });

  describe('length', () => {
    it('less than 8 chars', () => {
      expect(checkPassword('Passw1!')).toBe(false);
    });

    it('exactly 8 chars', () => {
      expect(checkPassword('Passwo1!')).toBe(true);
    });

    it('exactly 16 chars', () => {
      expect(checkPassword('Password1!oooooo')).toBe(true);
    });

    it('more than 16 chars', () => {
      expect(checkPassword('Password1!ooooooo')).toBe(false);
    });
  });

  describe('content', () => {
    it('without number', () => {
      expect(checkPassword('Password!')).toBe(false);
    });

    it('without special char', () => {
      expect(checkPassword('Password1')).toBe(false);
    });

    it('without uppercase letter', () => {
      expect(checkPassword('password1!')).toBe(false);
    });
  });
});
