'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Password1!')).toBeTruthy();
  });

  it(`should return 'false' for the password with 8 characters 
  without special symbol`, () => {
    expect(checkPassword('Password1a')).toBeFalsy();
  });

  it(`should return 'false' for the password with 8 characters 
  without number`, () => {
    expect(checkPassword('Password!!')).toBeFalsy();
  });

  it(`should return 'false' for the password with 8 characters 
  without Uppercase letter`, () => {
    expect(checkPassword('password!!')).toBeFalsy();
  });

  it(`should return 'false' for the password with 7 characters`, () => {
    expect(checkPassword('Passs1!')).toBeFalsy();
  });

  it(`should return 'true' for the password with 16 characters`, () => {
    expect(checkPassword('Passwordnewone1!')).toBeTruthy();
  });

  it(`should return 'false' for the password with 17 characters`, () => {
    expect(checkPassword('Passwordnewone1!!')).toBeFalsy();
  });
});
