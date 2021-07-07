'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('passwordd')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Pa$sw0rd')).toBeTruthy();
  });

  it(`should return 'false' for the valid password with 7 characters`, () => {
    expect(checkPassword('Pa$sw0r')).toBeFalsy();
  });

  it(`should return 'false' for the valid password with 17 characters`, () => {
    expect(checkPassword('Pa$sw0rdPa$sw0rd1')).toBeFalsy();
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('Pa$sw0rdPa$sw0rd')).toBeTruthy();
  });

  it(`should return 'false' for the password length 10 characters without 
  special symbol`, () => {
    expect(checkPassword('Passw0rd12')).toBeFalsy();
  });

  it(`should return 'false' for the password length 10 characters without 
  number`, () => {
    expect(checkPassword('Pa$sword!!')).toBeFalsy();
  });

  it(`should return 'false' for the password length 10 characters without 
  uppercase letter`, () => {
    expect(checkPassword('pa$sword12')).toBeFalsy();
  });
});
