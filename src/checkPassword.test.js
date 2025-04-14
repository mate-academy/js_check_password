'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => expect(checkPassword).toBeDefined());

  it(`should return boolean`, () => {
    expect(typeof checkPassword('Password1!')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Password1!')).toBeTruthy();
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('PasswordPasswd1!')).toBeTruthy();
  });

  it(`should return 'false' for the password with cyrillic characters`, () => {
    expect(checkPassword('Пароль1!')).toBeFalsy();
  });

  it(`should return 'false' for the password with length < 8`, () => {
    expect(checkPassword('Pass1!')).toBeFalsy();
  });

  it(`should return 'false' for the password with length > 16`, () => {
    expect(checkPassword('PasswordPassword1!')).toBeFalsy();
  });

  it(`should return 'false' for the password without at least 1 digit`, () => {
    expect(checkPassword('Password!')).toBeFalsy();
  });

  it(
    `should return 'false' for password without at least 1 special symbol`,
    () => expect(checkPassword('Password1')).toBeFalsy()
  );

  it(
    `should return 'false' for password without at least 1 uppercase letter`,
    () => expect(checkPassword('password1!')).toBeFalsy()
  );
});
