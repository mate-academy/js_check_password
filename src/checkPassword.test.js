'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('hellO.12')).toBe(true);
  });

  it(`should return 'false' for the valid password with 8 
  characters without digits`, () => {
    expect(checkPassword('hellO.oo')).toBe(false);
  });

  it(`should return 'false' for the valid password with 8 
  characters without special characters`, () => {
    expect(checkPassword('hellO123')).toBe(false);
  });

  it(`should return 'false' for the valid password with 8 
  characters without uppercase letters`, () => {
    expect(checkPassword('hello.123')).toBe(false);
  });

  it(`should return 'false' for the valid password with 8 
  characters without uppercase letters and special characters`, () => {
    expect(checkPassword('hellO!!!')).toBe(false);
  });

  it(`should return 'true' for the valid password with 16 
  characters`, () => {
    expect(checkPassword('hellO.!!!1234567')).toBe(true);
  });

  it(`should return 'false' for the valid password with 18 
  characters`, () => {
    expect(checkPassword('hellO.!!!1234567aa')).toBe(false);
  });
});
