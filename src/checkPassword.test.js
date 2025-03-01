'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('pass')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('P@ssw0rd')).toBe(true);
  });

  // write more tests here
  it(`should return 'false' for the password that 
  contains 7 characters`, () => {
    expect(checkPassword('P@ssw0r')).toBe(false);
  });

  it(`should return 'false' for the password that 
  contains 17 characters`, () => {
    expect(checkPassword('P@ssw0rd123456789')).toBe(false);
  });

  it(`should return 'false' for the password that 
  contains Cyrillic letters`, () => {
    expect(checkPassword('P@ssв0рд')).toBe(false);
  });
});
