'use strict';

const checkPassword = require('./checkPassword');

describe(`Function 'checkPassword':`, () => {
  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    const result = checkPassword('Password1!');
    expect(typeof result).toBe('boolean');
  });

  // README examples
  it(`should return true for checkPassword('Password1!')`, () => {
    expect(checkPassword('Password1!')).toBe(true);
  });

  it(`should return false for checkPassword('qwerty')`, () => {
    expect(checkPassword('qwerty')).toBe(false);
  });

  it(`should return false for checkPassword('Str@ng')`, () => {
    expect(checkPassword('Str@ng')).toBe(false);
  });

  // Length boundaries
  it(`should return false for 7-character password`, () => {
    expect(checkPassword('Abcde1!')).toBe(false);
  });

  it(`should return true for 8-character valid password`, () => {
    expect(checkPassword('Abcdef1!')).toBe(true);
  });

  it(`should return true for 16-character valid password`, () => {
    expect(checkPassword('Abcdefgh1234!XYZ')).toBe(true);
  });

  it(`should return false for 17-character password`, () => {
    // 15 liter + 1 cyfra + 1 znak specjalny = 17 znaków
    expect(checkPassword('Abcdefghijklmno1!')).toBe(false);
  });

  // Character class coverage
  it(`should return false for password without uppercase`, () => {
    expect(checkPassword('abcdef1!')).toBe(false);
  });

  it(`should return false for password without digit`, () => {
    expect(checkPassword('Abcdefgh!')).toBe(false);
  });

  it(`should return false for password without special char`, () => {
    expect(checkPassword('Abcdefg1')).toBe(false);
  });

  it(`should return true for uppercase-only valid password`, () => {
    expect(checkPassword('ABCDEF12!')).toBe(true);
  });

  it(`should return false for password with Cyrillic letters`, () => {
    expect(checkPassword('Пароль1!')).toBe(false);
  });

  it(`should return false for password with accented Latin letters`, () => {
    expect(checkPassword('Pässword1!')).toBe(false);
  });

  // Whitespace check
  it(`should return false for password containing whitespace`, () => {
    expect(checkPassword('Abc def1!')).toBe(false);
  });
});
