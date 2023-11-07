'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('Password1!')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Qwerty1!')).toBeTruthy();
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('Qwertyuser12345!')).toBeTruthy();
  });

  it(`should return 'false' for the valid password with 7 characters`, () => {
    expect(checkPassword('Qwer1!')).toBeFalsy();
  });

  it(`should return 'false' for the valid password with 17 characters`, () => {
    expect(checkPassword('Qwertyuser12345!$')).toBeFalsy();
  });

  it(`should return 'false' for the password is't 
    contain special character`, () => {
    expect(checkPassword('NewUser123')).toBeFalsy();
  });

  it(`should return 'false' for the password is't 
    contain capitals`, () => {
    expect(checkPassword('newuser123')).toBeFalsy();
  });

  it(`should return 'false' for the password is't 
    contain numbers`, () => {
    expect(checkPassword('Inewuser$')).toBeFalsy();
  });
});
