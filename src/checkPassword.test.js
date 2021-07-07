'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('false')).toBe('boolean');
  });

  it(`should return 'false' for the valid password with less than 7 characters`,
    () => {
      expect(checkPassword('1!TheEl')).toBe(false);
    });

  it(`should return 'true' for the valid password with 8 characters`,
    () => {
      expect(checkPassword('1!TheEld')).toBe(true);
    });

  it(`should return 'true' for the valid password with 12 characters`,
    () => {
      expect(checkPassword('1!TheElderSc')).toBe(true);
    });

  it(`should return 'true' for the valid password with 16 characters`,
    () => {
      expect(checkPassword('1!TheElderScroll')).toBe(true);
    });

  it(`should return 'false' for the valid password with 17 characters`,
    () => {
      expect(checkPassword('1!TheElderScrolls')).toBe(false);
    });

  it(
    `should return 'false' for the 10 symbols length password 
    which does not contain a number`,
    () => {
      expect(checkPassword('!TheElder')).toBe(false);
    });

  it(`should return 'false' for the 9 symbols length password
   which does not contain a special character`,
  () => {
    expect(checkPassword('1TheElder')).toBe(false);
  });

  it(`should return 'false' for the 10 symbols length password
   which does not contain an uppercase character`,
  () => {
    expect(checkPassword('!1theelder')).toBe(false);
  });

  it(`should return 'false' for the 12 symbols length  password 
   which contains non-latin characters`,
  () => {
    expect(checkPassword('1!ВhыdeрScr的')).toBe(false);
  });
});
