'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = checkPassword('12345678');

    expect(typeof result).toBe('boolean');
  });

  it('expects 8 characters', () => {
    const result = checkPassword('12345');

    expect(result).toBeFalsy();
  });

  it('includes at least 1 digit, 1 special and 1 uppercase characters', () => {
    const result = checkPassword('12345!qw');

    expect(result).toBeFalsy();
  });

  it('shorter than 16 characters', () => {
    const result = checkPassword('12345!Qwqwerttyyieodj7163');

    expect(result).toBeFalsy();
  });

  it('accepts letters of the Latin alphabet only', () => {
    const result = checkPassword('12345!Qй');

    expect(result).toBeFalsy();
  });

  it('returns true for valid passwords', () => {
    const result = checkPassword('12345!Qw');

    expect(result).toBeTruthy();
  });
});
