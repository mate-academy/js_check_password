'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('Password1!'))
      .toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Paswor1!'))
      .toBe(true);
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('Paswor1!Paswor1!'))
      .toBe(true);
  });

  it(`should return 'false' for the password with cyrillic letters`, () => {
    expect(checkPassword('ф1!фвіффі!'))
      .toBe(false);
  });

  it(`should return 'false' for the valid password with 7 characters`, () => {
    expect(checkPassword('Paass1!'))
      .toBe(false);
  });

  it(`should return 'false' for the valid password with 17 characters`, () => {
    expect(checkPassword('Paswor1!Paswor1!7'))
      .toBe(false);
  });

  it(`should return 'false' for the password without special character`, () => {
    expect(checkPassword('Paswor1Paswor17'))
      .toBe(false);
  });

  it(`should return 'false' for the password without digit`, () => {
    expect(checkPassword('Pasor!Pasor!'))
      .toBe(false);
  });

  it(`should return 'false' for the password without uppercase letter`, () => {
    expect(checkPassword('aswr!awor!'))
      .toBe(false);
  });
});
