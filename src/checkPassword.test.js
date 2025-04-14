'use strict';

const { checkPassword } = require('./checkPassword');

describe(`Function 'checkPassword':`, () => {
  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('Password1!'))
      .toBe('boolean');
  });

  describe(`should return 'true' for the valid password:`, () => {
    it(`with 8 characters`, () => {
      expect(checkPassword('P@werfu1'))
        .toBe(true);
    });

    it(`with 16 characters`, () => {
      expect(checkPassword('P@werfu1Password'))
        .toBe(true);
    });
  });

  describe(`should return 'false' for the invalid password:`, () => {
    it(`with Cyrillic letters`, () => {
      expect(checkPassword('П@тужнийПаро1ь'))
        .toBe(false);
    });

    it(`with 7 characters`, () => {
      expect(checkPassword('Str@ng1'))
        .toBe(false);
    });

    it(`with 17 characters`, () => {
      expect(checkPassword('P@werfu1Password!'))
        .toBe(false);
    });

    it(`without digits`, () => {
      expect(checkPassword('Password!'))
        .toBe(false);
    });

    it(`without special characters`, () => {
      expect(checkPassword('Password1'))
        .toBe(false);
    });

    it(`without uppercase letters`, () => {
      expect(checkPassword('p@ssword1'))
        .toBe(false);
    });

    it(`without digit, special character, uppercase letter`, () => {
      expect(checkPassword('newpassword'))
        .toBe(false);
    });
  });
});
