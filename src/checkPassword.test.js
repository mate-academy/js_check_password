'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('P@sswor1')).toBe('boolean');
  });

  describe(`shold return 'true'`, () => {
    it(`should return 'true' for the valid password
    with 8 characters`, () => {
      expect(checkPassword('P@sswor1')).toBeTruthy();
    });

    it(`should return 'true' for the valid password
    with 10 characters`, () => {
      expect(checkPassword('P@sswor123')).toBeTruthy();
    });

    it(`should return 'true' for the valid password
    with 16 characters`, () => {
      expect(checkPassword('P@sswor123123123')).toBeTruthy();
    });

    it(`should return 'true' for the valid password
    with 1 digit, 1 special char, 1 uppercase char`, () => {
      expect(checkPassword('P@ssword2')).toBeTruthy();
    });
  });

  describe(`shold return 'false'`, () => {
    it(`should return 'falsy' for the password
    with 7 characters`, () => {
      expect(checkPassword('P@swor2')).toBeFalsy();
    });

    it(`should return 'falsy' for the password
    with 17 characters`, () => {
      expect(checkPassword('P@swor22222222222')).toBeFalsy();
    });

    it(`should return 'falsy' for the password
    with Cyrillic char`, () => {
      expect(checkPassword('P@ssворд1')).toBeFalsy();
    });

    it(`should return 'falsy' for the password
    without digit`, () => {
      expect(checkPassword('P@ssword')).toBeFalsy();
    });

    it(`should return 'falsy' for the password
    without special char`, () => {
      expect(checkPassword('P4ssword')).toBeFalsy();
    });

    it(`should return 'falsy' for the password
    without uppercase letter`, () => {
      expect(checkPassword('p@ssword')).toBeFalsy();
    });
  });
});
