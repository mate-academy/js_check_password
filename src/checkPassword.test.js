'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('Pass123#')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Pass123#')).toBe(true);
  });

  it(`should return 'false' for a password consisting of the required
   characters 7 characters long`, () => {
    expect(checkPassword('Pass12#')).toBe(false);
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('Password123#@%56')).toBe(true);
  });

  it(`should return 'false' for a password consisting of the required
   characters 17 characters long`, () => {
    expect(checkPassword('Password123#@%567')).toBe(false);
  });

  it(`should return 'true' for the valid password with 12 characters`, () => {
    expect(checkPassword('Pass123#@%56')).toBe(true);
  });

  it(`should return 'false' for a 12 character password consisting
   of upper and lower case Latin letters and Arabic numerals`, () => {
    expect(checkPassword('Pass12356789')).toBe(false);
  });

  it(`should return 'false' for a 12 character password consisting
   of upper and lower case Latin letters and special characters`, () => {
    expect(checkPassword('Pass@#$%^&*(')).toBe(false);
  });

  it(`should return 'false' for a 12 character password consisting
   of Arabic numerals and special characters`, () => {
    expect(checkPassword('1234@#$%^&*(')).toBe(false);
  });

  it(`should return 'false' for a 12 character password consisting
   of lowercase Latin letters, Arabic numerals and special characters`, () => {
    expect(checkPassword('pass123%^&*(')).toBe(false);
  });

  // write more tests here
});
