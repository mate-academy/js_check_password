'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('pwd')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('pwdPWD$8')).toEqual(true);
  });

  // write more tests here
  it(`should return 'false' for the pwd w/non_Latin chars`, () => {
    expect(checkPassword('_шщertpwdPWD$8')).toEqual(false);
  });

  it(`should return 'false' for the pwd w/o min 1 spec char`, () => {
    expect(checkPassword('qwertpwdPWD8')).toEqual(false);
  });

  it(`should return 'false' for the pwd w/o min 1 digit`, () => {
    expect(checkPassword('_qwertpwdPWd$')).toEqual(false);
  });

  it(`should return 'false' for the pwd w/o min 1 capital letter`, () => {
    expect(checkPassword('_qwertpwdywD$')).toEqual(false);
  });

  it(`should return 'true' for the pwd within  8..16 chars`, () => {
    expect(checkPassword('_qwertpwdPWD$8')).toEqual(true);
  });

  it(`should return 'true' for the password = 16 chars`, () => {
    expect(checkPassword('_qwertpwdPWD$8fg')).toEqual(true);
  });

  it(`should return 'false' for the password > 16 chars`, () => {
    expect(checkPassword('_qwertpwdPWD$8fg01')).toEqual(false);
  });
});
