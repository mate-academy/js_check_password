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

  it(`should return false for passwords shorter than 8 characters`, () => {
    expect(checkPassword('@Pass1f')).toBe(false);
  });
  it(`should return false for passwords longer than 16 characters`, () => {
    expect(checkPassword('ff@Pass1ffhfhfhfhf')).toBe(false);
  });

  it('should return false for cyrillic letters', () => {
    expect(checkPassword('@Passнw1!')).toBe(false);
  });

  it('should return false for missing digit', () => {
    expect(checkPassword('@Passw!f')).toBe(false);
  });

  it('should return false for missing special character', () => {
    expect(checkPassword('2Paswsk1f')).toBe(false);
  });

  it('should return false for lowercase-only passwords', () => {
    expect(checkPassword('2@asskw1f')).toBe(false);
  });
});
