'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  const validePas = `^(?=.*[A-Z])(?=.*)(?=.*[@$!%*?&])[A-Za-z@$!%*?&]{8,16}$`;

  it(`should return boolean`, () => {
    expect(typeof checkPassword(validePas)).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Pas1$as1')).toBeTruthy();
  });

  it(`should return 'true' for the valid password with 13 characters`, () => {
    expect(checkPassword('Passw1$aer4s1')).toBeTruthy();
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('Passw11a1$aer4s1')).toBeTruthy();
  });

  it(`should return 'true' for password with two
  uppercase letters and length 13 characters`, () => {
    expect(checkPassword('PAs1237sword$')).toBeTruthy();
  });

  it(`should return 'true' for password with two
  special characters and length 10 characters`, () => {
    expect(checkPassword('Pas17swo$$')).toBeTruthy();
  });

  it(`should return 'false' for the valid password with 17 characters`, () => {
    expect(checkPassword('Passw11a1$aer4ss1')).toBeFalsy();
  });

  it(`should return 'false' for the valid password with 7 characters`, () => {
    expect(checkPassword('Pas1$a1')).toBeFalsy();
  });

  it(`should return 'false' for the valid password with 4 characters`, () => {
    expect(checkPassword('P1$a')).toBeFalsy();
  });

  it(`should return 'false' for the invalid password with 8 characters`, () => {
    expect(checkPassword('Pass$aaa')).toBeFalsy();
  });

  it(`should return 'false' for password
  without digit with 8 characters`, () => {
    expect(checkPassword('Pass$aaa')).toBeFalsy();
  });

  it(`should return 'false' for password without
  Latin letters with 8 characters`, () => {
    expect(checkPassword('Фа$1237а')).toBeFalsy();
  });

  it(`should return 'false' for password without
  special character with 16 characters`, () => {
    expect(checkPassword('Pas1237sword1234')).toBeFalsy();
  });

  it(`should return 'false' for password without
  uppercase letter with 13 characters`, () => {
    expect(checkPassword('pas1237sword$')).toBeFalsy();
  });
});
