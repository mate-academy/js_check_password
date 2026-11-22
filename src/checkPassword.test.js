'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(checkPassword('Djkj!jkj12')).toEqual(expect.any(Boolean));
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('@Pass1fp')).toBe(true);
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('@Pass1fp!!jdjdjd')).toBe(true);
  });

  it('should return true for cyrillic letters', () => {
    expect(checkPassword('@PassЇ1!')).toBe(true);
  });

  it('should return false for missing digit', () => {
    expect(checkPassword('@PassЇ!f')).toBe(false);
  });

  it('should return false for missing special character', () => {
    expect(checkPassword('2Pasпsk1f')).toBe(false);
  });

  it('should return false for lowercase-only passwords', () => {
    expect(checkPassword('2@asпsk1f')).toBe(false);
  });
});
