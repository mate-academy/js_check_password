'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('')).toBe('boolean');
  });

  it(`should return 'true' for the valid password //
      (Password1!) with 8 characters`, () => {
    expect(checkPassword('Password1!')).toBe(true);
  });

  it(`should return 'false' for the invalid password //
      (Password11) with 8 characters`, () => {
    expect(checkPassword('Password11')).toBe(false);
  });

  it(`should return 'true' for the valid password //
      (Passwordpasswo1!) with 16 characters`, () => {
    expect(checkPassword('Passwordpasswo1!')).toBe(true);
  });

  it(`should return 'false' for the invalid password //
      (Passwordpassword) with 16 characters`, () => {
    expect(checkPassword('Passwordpassword1!')).toBe(false);
  });

  it(`should return 'true' for the valid password //
      contains only Latin letters (Qwertyuioplkj12!)`, () => {
    expect(checkPassword('Qwertyuioplkj12!')).toBe(true);
  });

  it(`should return 'false' for the password //
      contains any amount of non-Latin letters (Аwertyuioplkj12!)`, () => {
    expect(checkPassword('Аwertyuioplkj12!')).toBe(false);
  });

  it(`should return 'true' for the valid password //
      contains at least 1 uppercase letter (Qazqaz12!)`, () => {
    expect(checkPassword('Qazqaz1!')).toBe(true);
  });

  it(`should return 'false' for the valid password //
      doesn't contain the uppercase letter (qazqaz1!)`, () => {
    expect(checkPassword('qazqaz1!')).toBe(false);
  });

  it(`should return 'true' for the valid password //
      contains at least 1 digit (Qqqaaa1a!)`, () => {
    expect(checkPassword('Qqqaaa1a!')).toBe(true);
  });

  it(`should return 'false' for the valid password //
      contains no digits (Qqqaaaqa!)`, () => {
    expect(checkPassword('Qqqaaaqa!')).toBe(false);
  });

  it(`should return 'true' for the valid password //
      contains at least 1 special character (Q=qqaa*a1a!)`, () => {
    expect(checkPassword('Q=qqaa*a1a!')).toBe(true);
  });

  it(`should return 'false' for the valid password //
      contains at least 1 special character (Qfqqaafa1a)`, () => {
    expect(checkPassword('Qfqqaafa1a')).toBe(false);
  });
});
