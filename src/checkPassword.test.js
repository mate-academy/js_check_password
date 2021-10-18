'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('Password1!')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Passwo1!')).toBeTruthy();
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('Passwordtest11!!')).toBeTruthy();
  });

  it(`should return 'true' for the valid password with 10 characters`, () => {
    expect(checkPassword('P@ssword12')).toBeTruthy();
  });

  it(`should return 'false' for the password with Cyrillic`, () => {
    expect(checkPassword('1=пароль')).toBeFalsy();
  });

  it(`should return 'false' for the password without 1 diget`, () => {
    expect(checkPassword('Password!')).toBeFalsy();
  });

  it(`should return 'false' for the password
   without 1 special character`, () => {
    expect(checkPassword('Password1')).toBeFalsy();
  });

  it(`should return 'false' for the password without 1 capital`, () => {
    expect(checkPassword('password1!')).toBeFalsy();
  });

  it(`should return 'false' for the password with 7 characters`, () => {
    expect(checkPassword('Passs1!')).toBeFalsy();
  });

  it(`should return 'false' for the password with 17 characters`, () => {
    expect(checkPassword('Passwordpassw0rd!')).toBeFalsy();
  });
  // write more tests here
});
