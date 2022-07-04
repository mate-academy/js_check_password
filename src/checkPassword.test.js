'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('a')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Qwe@sd3xc')).toEqual(true);
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('Qwertyuiop!2qwer')).toEqual(true);
  });

  it(`accept only letters of the Latin alphabet`, () => {
    expect(checkPassword('Ф0лсіінпут!')).toEqual(false);
  });

  it(`should be at least 8 char length`, () => {
    expect(checkPassword('Q@c1')).toEqual(false);
  });

  it(`should be maximum 16 characters length`, () => {
    expect(checkPassword('Q@c34567890qwerty')).toEqual(false);
  });

  it(`should contain at least 1 digit`, () => {
    expect(checkPassword('Q!ertyui')).toEqual(false);
  });

  it(`should contain at least 1 special character`, () => {
    expect(checkPassword('Qwertyu1')).toEqual(false);
  });

  it(`should contain at least 1 uppercase character`, () => {
    expect(checkPassword('qwerty1!')).toEqual(false);
  });
});
