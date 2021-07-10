'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('kk')).toBe('boolean');
  });

  it(`should return 'false' for the password with 7 characters`, () => {
    expect(checkPassword('Kk%!a0a')).toBe(false);
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Kk%!a0aa')).toBe(true);
  });

  it(`should return 'true' for the valid password with 12 characters`, () => {
    expect(checkPassword('Kk%!a0aa1234')).toBe(true);
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('Kk%!a0aaKk%!a0aa')).toBe(true);
  });

  it(`should return 'false' for the password with 17 characters`, () => {
    expect(checkPassword('Kk%!a0aaKk%!a0aa9')).toBe(false);
  });

  it(`should return 'false' for the password withot number`, () => {
    expect(checkPassword('Kk%!ayaayyyy')).toBe(false);
  });

  it(`should return 'false' for the password withot special character`, () => {
    expect(checkPassword('Kk12ayaayyyy')).toBe(false);
  });

  it(`should return 'false'
   for the password withot uppercase character`, () => {
    expect(checkPassword('#$%^%i4563')).toBe(false);
  });
});
