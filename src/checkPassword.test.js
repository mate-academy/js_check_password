'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const r = checkPassword('');

    expect(typeof r).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Password1!')).toEqual(true);
  });

  it(`should return 'false' if chars less than 8`, () => {
    expect(checkPassword('qwerty')).toEqual(false);
  });

  it(`should return 'false' if chars 16 or more`, () => {
    expect(checkPassword('Password1!Password1!')).toEqual(false);
  });

  it(`should return 'false' if we haven't uppercase letter`, () => {
    expect(checkPassword('password1!')).toEqual(false);
  });

  it(`should return 'false' if we haven't digit`, () => {
    expect(checkPassword('Passwordd!')).toEqual(false);
  });

  it(`should return 'false' if we haven't special symbol`, () => {
    expect(checkPassword('Password11')).toEqual(false);
  });

  it(`should return 'false' if we have cyrillic characters`, () => {
    expect(checkPassword('Пароле1!')).toEqual(false);
  });
});
