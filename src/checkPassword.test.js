'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('ABC')).toBe('boolean');
  });

  it(`should return 'false' for the valid password 
  with 7 or less characters`, () => {
    expect(checkPassword('Qwert_1')).toBe(false);
  });

  it(`should return 'true' for the valid password 
  with 8 characters`, () => {
    expect(checkPassword('Qwerty_1')).toBe(true);
  });

  it(`should return 'true' for the valid password 
  with 16 characters`, () => {
    expect(checkPassword('Qwerty_@!1234567')).toBe(true);
  });

  it(`should return 'false' for the valid password 
  with 17 or more characters`, () => {
    expect(checkPassword('Qwerty_@!12345678')).toBe(false);
  });

  it(`should return 'false' for the password withot 
  at least one special character`, () => {
    expect(checkPassword('Qwertytest')).toBe(false);
  });

  it(`should return 'false' for the password 
  withot at least one number`, () => {
    expect(checkPassword('Qwerty_test')).toBe(false);
  });

  it(`should return 'false' for the password 
  withot at least one uppercase letter`, () => {
    expect(checkPassword('qwerty_1test')).toBe(false);
  });

  it(`should return 'false' for the password 
  contain at least one cyrillic letter`, () => {
    expect(checkPassword('тест_1test')).toBe(false);
  });
});
