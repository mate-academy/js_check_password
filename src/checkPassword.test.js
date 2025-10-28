'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('Password1!')).toBe('boolean');
    expect(typeof checkPassword('qwerty')).toBe('boolean');
  });

  it(`should return 'true' for the valid password
    with all rules`, () => {
    expect(checkPassword('Password1!')).toBe(true);
  });

  it(`should return 'true' for the valid password
    with at least 8 characters`, () => {
    expect(checkPassword('Test1!ok')).toBe(true);
  });

  it(`should return 'true' for the valid password
    with max 16 characters`, () => {
    expect(checkPassword('Password1!Passwo')).toBe(true);
  });

  it(`should return 'false' for the invalid password
    with less than 8 characters`, () => {
    expect(checkPassword('Passw1!')).toBe(false);
  });

  it(`should return 'false' for the invalid password
    with more than 16 characters`, () => {
    expect(checkPassword('Password1!Password')).toBe(false);
  });

  it(`should return 'false' for the invalid password
    without at least 1 digit`, () => {
    expect(checkPassword('Str@ngks')).toBe(false);
  });

  it(`should return 'false' for the invalid password
    without at least 1 special character`, () => {
    expect(checkPassword('Qwerty123')).toBe(false);
  });

  it(`should return 'false' for the invalid password
    without at least 1 uppercase letter`, () => {
    expect(checkPassword('qwerty12@')).toBe(false);
  });

  it(`should return 'false' for the invalid password
    without letters of the Latin alphabet `, () => {
    expect(checkPassword('Пароль1!')).toBe(false);
  });

  it(`should return 'false' for the invalid password
    with incorrect multiple criteria`, () => {
    expect(checkPassword('qwerty')).toBe(false);
  });
});
