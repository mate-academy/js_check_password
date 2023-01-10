'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('PaSsword0!')).toBe('boolean');
  });

  it(`should return 'false' for the password
  with more than 16 characters`, () => {
    expect(checkPassword('AAmdhet!nsmsjxkkkfc')).toBeFalsy();
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Passwo)1')).toBeTruthy();
  });

  it(`should return 'false' for the password
    without 1 uppercase letter`, () => {
    expect(checkPassword('password1')).toBeFalsy();
  });

  it(`should return 'false' for the password
  without 1 special character`, () => {
    expect(checkPassword('Password1')).toBeFalsy();
  });

  it(`should return 'false' for the password
    without 1 digit`, () => {
    expect(checkPassword('paSSword!')).toBeFalsy();
  });

  it(`should return 'false' for the password
    contains cyrillic letters `, () => {
    expect(checkPassword('Перемога1!')).toBeFalsy();
  });
});
