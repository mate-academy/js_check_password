'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('abcd')).toBe('boolean');
  });

  it(`should return 'true' for
    the valid password with 8 characters`, () => {
    expect(checkPassword('Password1!')).toBe(true);
  });

  it(`should return 'false' for
    the invalid password with less than 8 characters`, () => {
    expect(checkPassword('qwerty')).toBe(false);
  });

  it(`should return 'false' for
    the invalid password with less than 8 characters`, () => {
    expect(checkPassword('Str@ng')).toBe(false);
  });

  it(`should return 'true' for
    the valid password with more than 8 and less than 16 characters`, () => {
    expect(checkPassword('Mate_Academy_#1')).toBe(true);
  });

  it(`should return 'false' for
    the invalid password with more than 16 characters`, () => {
    expect(checkPassword('mynameisYehormyageis19!')).toBe(false);
  });

  it(`should return 'false' for
    the invalid password with 8 characters`, () => {
    expect(checkPassword('12345678')).toBe(false);
  });

  it(`should return 'false' for
    the invalid password with more than 8 and less than 16 characters`, () => {
    expect(checkPassword('qwerty12345678')).toBe(false);
  });

  it(`should return 'true' for
    the valid password with more than 8 and less than 16 characters`, () => {
    expect(checkPassword('Qwerty1234!')).toBe(true);
  });

  it(`should return 'true' for
    the valid password with more than 8 and less than 16 characters`, () => {
    expect(checkPassword('YehorKorablin$1')).toBe(true);
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('ABCDabcd1234!@#$')).toBe(true);
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Ab1234??')).toBe(true);
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Yehor99%')).toBe(true);
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('TS-best1')).toBe(true);
  });
});
