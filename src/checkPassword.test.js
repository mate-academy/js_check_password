'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('P@ssword1!')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('P@ssword1!')).toBe(true);
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('Test1234Test!@#$')).toBe(true);
  });

  it(`should return false for the password with < 8 characters`, () => {
    expect(checkPassword('Pass2!@')).toBe(false);
  });

  it(`should return false for the password with > 16 characters`, () => {
    expect(checkPassword('Pass2!@jdshbakfjnasdlm;a')).toBe(false);
  });

  it(`should return false for the password without digit`, () => {
    expect(checkPassword('Testtest!')).toBe(false);
  });

  it(`should return false for the password without uppercase letter`, () => {
    expect(checkPassword('t5esttest!')).toBe(false);
  });

  it(`should return false for the password without special character`, () => {
    expect(checkPassword('t5esttestM')).toBe(false);
  });
});
