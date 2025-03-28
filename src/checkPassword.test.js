'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('assword1!')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Password1!')).toBe(true);
  });

  it(`should return 'false' for the password 
   with less than 8 characters`, () => {
    expect(checkPassword('Paord1!')).toBe(false);
  });

  it(`should return 'false' for the password 
   with more than 16 characters`, () => {
    expect(checkPassword('Password12345678!')).toBe(false);
  });

  it(`should return 'false' for the password with cyrillic symbols`, () => {
    expect(checkPassword('Passworд1!')).toBe(false);
  });

  it(`should return 'false' for the password without special symbols`, () => {
    expect(checkPassword('Password1')).toBe(false);
  });

  it(`should return 'false' for the password without number`, () => {
    expect(checkPassword('Password!')).toBe(false);
  });

  it(`should return 'false' for the password without uppercase symbol`, () => {
    expect(checkPassword('password1!')).toBe(false);
  });
});
