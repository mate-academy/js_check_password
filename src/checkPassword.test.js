/* eslint-disable max-len */
'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('12345678')).toEqual('boolean');
  });

  it(`should return true for valid password with exactly 8 characters`, () => {
    expect(checkPassword('P@ssw0r1')).toEqual(true);
  });

  it(`should return true for valid password with 9 characters`, () => {
    expect(checkPassword('P@ssw0rd!')).toEqual(true);
  });

  it(`should return false when the password is less than 8 characters`, () => {
    expect(checkPassword('P@sw0rd')).toEqual(false);
  });

  it(`should return true for valid password with exactly 16 characters`, () => {
    expect(checkPassword('P@ssw0rd!P@ssw0r')).toEqual(true);
  });

  it(`should return false when the password is more than 16 characters`, () => {
    expect(checkPassword('P@ssw0rd!P@ssw0rd!')).toEqual(false);
  });

  it(`should return false when password has no uppercase letter`, () => {
    expect(checkPassword('p@ssw0rd!')).toEqual(false);
  });

  it(`should return false when password has no lowercase letter`, () => {
    expect(checkPassword('P@SSW0RD!')).toEqual(false);
  });

  it(`should return false when password has no digit`, () => {
    expect(checkPassword('Password!')).toEqual(false);
  });

  it(`should return false when password has no special character`, () => {
    expect(checkPassword('Passw0rd')).toEqual(false);
  });

  it(`should return false when password contains spaces`, () => {
    expect(checkPassword('P@s sw0rd!')).toEqual(false);
  });

  it(`should return true for example password 'Password1!'`, () => {
    expect(checkPassword('Password1!')).toEqual(true);
  });

  it(`should return false for example password 'qwerty'`, () => {
    expect(checkPassword('qwerty')).toEqual(false);
  });

  it(`should return false for example password 'Str@ng'`, () => {
    expect(checkPassword('Str@ng')).toEqual(false);
  });

  it(`should return true when password contains non-Latin (accented) letters like ä`, () => {
    expect(checkPassword('Pässw0rd!')).toEqual(true);
  });

  it(`should return false when password contains Cyrillic letters (Рassword1!)`, () => {
    expect(checkPassword('Рassword1!')).toEqual(false);
  });

  it(`should return true for minimal valid password with all required categories (A1!aaaaa)`, () => {
    expect(checkPassword('A1!aaaaa')).toEqual(true);
  });

  it(`should return true for password with multiple specials and digits (P@ssw0rd!!11)`, () => {
    expect(checkPassword('P@ssw0rd!!11')).toEqual(true);
  });

  it(`should return false when password has uppercase + special but no digit (Passw@rd)`, () => {
    expect(checkPassword('Passw@rd')).toEqual(false);
  });
});
