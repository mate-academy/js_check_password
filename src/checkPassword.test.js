'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('Password1!')).toBe('boolean');
  });

  it(`should return 'false' for empty password field`, () => {
    expect(checkPassword('')).toBe(false);
  });

  it(`should return 'true' for the valid password with 10 characters`, () => {
    expect(checkPassword('Hubabuba1!')).toBe(true);
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Kirby#01')).toBe(true);
  });

  it(`should return 'false' for the valid password with 17 characters`, () => {
    expect(checkPassword('Taras_Budzhak1488')).toBe(false);
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('Laptop_Laptop_11')).toBe(true);
  });

  it(`should return 'false' for the valid password with 7 characters`, () => {
    expect(checkPassword('T1kita!')).toBe(false);
  });

  it(`should return 'false' for the password without special symbol`, () => {
    expect(checkPassword('Hubabuba13')).toBe(false);
  });

  it(`should return 'false' for the password without number`, () => {
    expect(checkPassword('Hubabuba!')).toBe(false);
  });

  it(`should return 'false' for the password without UpperCase`, () => {
    expect(checkPassword('hubabuba13!')).toBe(false);
  });
});
