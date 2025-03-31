'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('Password1@')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    const validPassword = checkPassword('Password1@');

    expect(validPassword)
      .toBe(true);
  });

  it('should accepts only letters of the Latin alphabet `Aa-Zz` ', () => {
    const validPassword = checkPassword('Password1@');

    expect(validPassword)
      .toBe(true);
  });

  it(`should return 'false' 
  if password consist letters of the Cyrylic alphabet 'Аа-Яя' `, () => {
    const validPassword = checkPassword('Пароль@');

    expect(validPassword)
      .toBe(false);
  });

  it(`should return 'false' 
  if the password at less 8 characters`, () => {
    const validPassword = checkPassword('Passw1@');

    expect(validPassword)
      .toBe(false);
  });

  it(`should return 'true' if the password
   contain maximum 16 characters inclusive`, () => {
    const validPassword = checkPassword('Password1234567@');

    expect(validPassword)
      .toBe(true);
  });

  it(`should return 'false' if the password
   contain more than 16 characters`, () => {
    const validPassword = checkPassword('Password12345678@');

    expect(validPassword)
      .toBe(false);
  });

  it(`should return 'false' if the password
   doesn't contain at least 1 digit`, () => {
    const validPassword = checkPassword('Password@');

    expect(validPassword)
      .toBe(false);
  });

  it(`should return 'false' if the password
   doesn't contain 1 special character`, () => {
    const validPassword = checkPassword('Password1');

    expect(validPassword)
      .toBe(false);
  });

  it(`should return 'false' if the password
   doesn't contain 1 uppercase letter`, () => {
    const validPassword = checkPassword('password1@');

    expect(validPassword)
      .toBe(false);
  });

  it(`should return 'false' if the password
    contain only uppercase letter`, () => {
    const validPassword = checkPassword('PASSWORD1@');

    expect(validPassword)
      .toBe(false);
  });

  it(`should return 'false' if the password
    contain space`, () => {
    const validPassword = checkPassword('Pass word1@');

    expect(validPassword)
      .toBe(false);
  });
});
