'use strict';

const checkPassword = require('./checkPassword');

describe(`Function 'checkPassword':`, () => {
  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('Password')).toBe('boolean');
  });

  it(`should accept only letters from the latin alphabet`, () => {
    expect(checkPassword('P@дддssword1')).toBe(false);
  });

  it(`should have at least 8 characters`, () => {
    expect(checkPassword('P@sswo1!')).toBe(true);
  });

  it(`should not have less than 8 characters`, () => {
    expect(checkPassword('P@ssw1!')).toBe(false);
  });

  it(`should have maximum 16 characters`, () => {
    expect(checkPassword('P@ssw0rdP@ssw0rd')).toBe(true);
  });

  it(`should not have more than 16 characters`, () => {
    expect(checkPassword('P@ssw0rdP@ssw0rda')).toBe(false);
  });

  it(`should have
     at least 1 digit`, () => {
    expect(checkPassword('Password!')).toBe(false);
  });

  it(`should have
     at least 1 special character`, () => {
    expect(checkPassword('Password1')).toBe(false);
  });

  it(`should have
     at least 1 upper case letter`, () => {
    expect(checkPassword('password1!')).toBe(false);
  });

  it(`should not have spaces`, () => {
    expect(checkPassword('P@ss word1!')).toBe(false);
  });
});
