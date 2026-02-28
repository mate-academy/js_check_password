'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('qwerty123456')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Password1!')).toBe(true);
  });

  // write more tests here
  it(`should works with password having non-latin characters`, () => {
    expect(checkPassword('Пароль1!')).toBe(false);
  });

  it(`should return 'false' for the password
    with less than 8 characters`, () => {
    expect(checkPassword('qwerty')).toBe(false);
  });

  it(`should return 'false' for the password
    with less than 8 characters (despite meeting other requirements)`, () => {
    expect(checkPassword('Str@ng')).toBe(false);
  });

  it(`should return 'false' for the password
    with more than 16 characters`, () => {
    expect(checkPassword('FullSt@ckDevel0pment')).toBe(false);
  });

  it(`should return 'false' for the password
    if it lacks at least 1 digit`, () => {
    expect(checkPassword('StrongPassword!')).toBe(false);
  });

  it(`should return 'false' for the password
    if it lacks at least 1 uppercase letter`, () => {
    expect(checkPassword('strongp2ssword!')).toBe(false);
  });

  it(`should return 'false' for the password
    if it lacks at least 1 special character`, () => {
    expect(checkPassword('StrongP2ssword')).toBe(false);
  });
});
