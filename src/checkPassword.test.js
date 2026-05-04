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
    expect(checkPassword('Password1!')).toBeTruthy();
  });

  it(`should return 'false' for the invalid password with less than 8 characters or more than 16 characters`, () => {
    expect(checkPassword('Pass1!')).toBeFalsy();
    expect(checkPassword('Passwoooooooord1!')).toBeFalsy();
  });

  it(`should return 'false' for the invalid password without at least 1 digit or 1 special character or 1 uppercase letter`, () => {
    expect(checkPassword('Password!')).toBeFalsy();
    expect(checkPassword('Password1')).toBeFalsy();
    expect(checkPassword('password1!')).toBeFalsy();
  });

  it(`should return 'false' for the invalid password with cyrillic alphabet`, () => {
    expect(checkPassword('Пароль1!')).toBeFalsy();
  });
});
