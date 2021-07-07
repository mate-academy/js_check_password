'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('Password')).toBe('boolean');
  });
  // using boundary values and equalant classes

  it(`should return 'true' for the valid password with 9 characters`, () => {
    expect(checkPassword('Passwor1!')).toBe(true);
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Passwo1!')).toBe(true);
  });

  it(`should return 'false' for the valid password with 7 characters`, () => {
    expect(checkPassword('Paswo1!')).toBe(false);
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('P123456789qwert@')).toBe(true);
  });

  it(`should return 'false' for the valid password with 17 characters`, () => {
    expect(checkPassword('Passwordddddddd1!')).toBe(false);
  });

  it(`should return 'false' for the password
    without digit(s) with 10 characters`, () => {
    expect(checkPassword('Passwordd!')).toBe(false);
  });

  it(`should return 'false' for the password
    without special character(s) with 10 characters`, () => {
    expect(checkPassword('Passwordd1')).toBe(false);
  });

  it(`should return 'false' for the password
    without uppercase with 10 characters`, () => {
    expect(checkPassword('passwordd@')).toBe(false);
  });
});
