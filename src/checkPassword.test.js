'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('')).toEqual('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Ololo1_g')).toBeTruthy();
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('Ololo1_g_ololo$2')).toBeTruthy();
  });

  it(`should return 'false' when password does not contain digits`, () => {
    expect(checkPassword('Ololo_ololO')).toBeFalsy();
  });

  it(`should return 'false' for password without special symbols`, () => {
    expect(checkPassword('Ololo12ololO')).toBeFalsy();
  });

  it(`should return 'false' for password without capital letters`, () => {
    expect(checkPassword('ololo1_j*')).toBeFalsy();
  });

  it(`should return 'false' when password less than 8 characters`, () => {
    expect(checkPassword('Ol0%k')).toBeFalsy();
  });

  it(`should return 'false' when password more than 16 characters`, () => {
    expect(checkPassword('Ololo_1$KKVasilenko')).toBeFalsy();
  });
});
