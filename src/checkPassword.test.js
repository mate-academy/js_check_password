'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = checkPassword('password');

    expect(typeof result).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    const result = checkPassword('Password1!');

    expect(result).toBeTruthy();
  });

  it(`should return 'false' for the password short then 8`, () => {
    const result = checkPassword('qwerty');

    expect(result).toBeFalsy();
  });

  it(`should return 'false' for the password longer then 16`, () => {
    const result = checkPassword('qwerty156!kkkFtOuh');

    expect(result).toBeFalsy();
  });

  it(`should return 'false' for the password with non Latin letters`, () => {
    const result = checkPassword('qwerty156!kFtпп');

    expect(result).toBeFalsy();
  });

  it(`should return 'false' for the password without uppercase letter`, () => {
    const result = checkPassword('qwerty156!hkjfh');

    expect(result).toBeFalsy();
  });

  it(`should return 'false' for the password without special character`, () => {
    const result = checkPassword('qwerty156Ghkjfh');

    expect(result).toBeFalsy();
  });

  it(`should return 'false' for the password without digit`, () => {
    const result = checkPassword('qrty!@!Ghkjfh');

    expect(result).toBeFalsy();
  });
});
