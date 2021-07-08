'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('P@ssw0rd')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('P@ssw0rd')).toBeTruthy();
  });

  // write more tests here

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('P@ssw0rdP@ssw0rd')).toBeTruthy();
  });

  it(`should return 'false' 
  for the valid password with Cyrillic alphabet`, () => {
    expect(checkPassword('Пароль1@')).toBeFalsy();
  });

  it(`should return 'false' for the valid password,
   but with 7 characters`, () => {
    expect(checkPassword('Pword1@')).toBeFalsy();
  });

  it(`should return 'false' for the valid password,
   but with 17 characters`, () => {
    expect(checkPassword('123456789Passw@rd')).toBeFalsy();
  });

  it(`should return 'false' for the valid password,
  but without 1 digit`, () => {
    expect(checkPassword('Password@')).toBeFalsy();
  });

  it(`should return 'false' for the valid password,
  but without 1 special character`, () => {
    expect(checkPassword('Password1')).toBeFalsy();
  });

  it(`should return 'false' for the valid password,
  but without 1 uppercase letter`, () => {
    expect(checkPassword('password1@')).toBeFalsy();
  });
});
