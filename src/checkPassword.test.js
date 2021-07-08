'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('passwordd')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Pa$sw0rd')).toBeTruthy();
  });

  it(`should return 'false' if password includes cyryllic characters`, () => {
    expect(checkPassword('Пароль!1')).toEqual(false);
  });

  it(`should return 'false' if there is no uppercase
  letters in password`, () => {
    expect(checkPassword('password!1')).toEqual(false);
  });

  it(`should return 'false' if there is no digits in password`, () => {
    expect(checkPassword('Password!@')).toEqual(false);
  });

  it(`should return 'false' if there is no special symbols in password`, () => {
    expect(checkPassword('Password22')).toEqual(false);
  });

  it(`should return 'false' if there is 7 symbols in password`, () => {
    expect(checkPassword('Passw@2')).toEqual(false);
  });

  it(`should return 'true' if there is 12 symbols in password`, () => {
    expect(checkPassword('Password22@!')).toEqual(true);
  });

  it(`should return 'true' if there is 16 symbols in password`, () => {
    expect(checkPassword('ABCdejepgk%$@264')).toEqual(true);
  });

  it(`should return 'false' if there is 17 symbols in password`, () => {
    expect(checkPassword('PFhrtdjvyw$&^pt34')).toEqual(false);
  });
});
