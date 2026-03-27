'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean value`, () => {
    expect(checkPassword('qwerty')).toBeFalsy();
  });

  it(`should return true for valid password with minimum length (8 chars)`, () => {
    expect(checkPassword('Passwo1!')).toBeTruthy();
  });

  it(`should return false if password is shorter than 8 characters`, () => {
    expect(checkPassword('Passw1!')).toBeFalsy();
  });

  it(`should return true for valid password with maximum allowed length (16 chars)`, () => {
    expect(checkPassword('Passssssssword1!')).toBeTruthy();
  });

  it(`should return false if password is longer than 16 characters`, () => {
    expect(checkPassword('Passsssdsssword1!')).toBeFalsy();
  });

  it(`should return false if password has no uppercase letter`, () => {
    expect(checkPassword('password1!')).toBeFalsy();
  });

  it(`should return false if password has no digit`, () => {
    expect(checkPassword('Str@ng')).toBeFalsy();
  });

  it(`should return false if password has no special character`, () => {
    expect(checkPassword('Password1')).toBeFalsy();
  });

  it(`should return false if password contains non-latin characters`, () => {
    expect(checkPassword('Пароль1!')).toBeFalsy();
  });
});
