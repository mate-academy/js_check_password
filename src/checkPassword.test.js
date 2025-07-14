'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('P@ssword1!'))
      .toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Aa1!aaaa')).toBe(true);
  });

  it(`should return 'false' for the invalid password with 7 characters`, () => {
    expect(checkPassword('Aa1!aaa')).toBe(false);
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('Aa1!aaaaaaaaaaaa')).toBe(true);
  });

  it(`should return 'false' for the invalid password
    with 17 characters`, () => {
    expect(checkPassword('Aa1!aaaaaaaaaaaaa')).toBe(false);
  });

  it(`should return 'true' for valid password
    with only letters of the Latin alphabet`, () => {
    expect(checkPassword('Aa1!aaaa')).toBe(true);
  });

  it(`should return 'false' for invalid password
    with letters of the cyrillic alphabet `, () => {
    expect(checkPassword('Пп1!ппdd')).toBe(false);
  });

  it(`should return 'false' for the invalid password
    without at least 1 digit`, () => {
    expect(checkPassword('Aafg!aaa')).toBe(false);
  });

  it(`should return 'false' for the invalid password
    without at least 1 special character`, () => {
    expect(checkPassword('Aa123aaa')).toBe(false);
  });

  it(`should return 'false' for invalid password
    without at least 1 uppercase letter`, () => {
    expect(checkPassword('fa123aaa')).toBe(false);
  });

  it(`should return 'false' for invalid password
    with only lowercase letter`, () => {
    expect(checkPassword('aa123aaa')).toBe(false);
  });

  // write more tests here
});
