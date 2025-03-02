'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('2B')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('2BNier-!')).toBe(true);
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('2BNier-!blaaaaaa')).toBe(true);
  });

  it(`should return 'false' for the valid password with 7 characters`, () => {
    expect(checkPassword('2BNier!')).toBe(false);
  });

  it(`should return 'false' for the valid password with 17 characters`, () => {
    expect(checkPassword('2BNier-!blaaaaaaa')).toBe(false);
  });

  it(`should return 'true' for the valid password with 13 characters`, () => {
    expect(checkPassword('2BNier-!blaaa')).toBe(true);
  });

  it(`should return 'false' for the password with cyrillic character`, () => {
    expect(checkPassword('2BNier-!bлaaa')).toBe(false);
  });

  it(`should return 'false' for the password which doesn't
  contain at least 1 digit`, () => {
    expect(checkPassword('BNier-!blaaa')).toBe(false);
  });

  it(`should return 'false' for the password which doesn't
  contain at least 1 special character`, () => {
    expect(checkPassword('2BNierblaaa')).toBe(false);
  });

  it(`should return 'false' for the password which doesn't
  contain at least 1 uppercase letter`, () => {
    expect(checkPassword('2ier-!blaaa')).toBe(false);
  });
});
