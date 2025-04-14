'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof(checkPassword('Password1!'))).toBe('boolean');
  });

  it(`should return 'false' for the password with 7 characters`, () => {
    expect(checkPassword('Passw1!')).toBe(false);
  });
  
  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Passwo1!')).toBe(true);
  });
  
  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('Passwordqwerty1!')).toBe(true);
  });
  
  it(`should return 'false' for the password with 17 characters`, () => {
    expect(checkPassword('Passwordqwerty12!')).toBe(false);
  });
  
  it(`should return 'false' for the password without Latin letters`, () => {
    expect(checkPassword('123456789!')).toBe(false);
  });
  
  it(`should return 'false' for the password without digit`, () => {
    expect(checkPassword('Password!')).toBe(false);
  });
  
  it(`should return 'false' for the password without special character`, () => {
    expect(checkPassword('Password1')).toBe(false);
  });
  
  it(`should return 'false' for the password without uppercase letter`, () => {
    expect(checkPassword('password1!')).toBe(false);
  });
  
  it(`should return 'false' for the password with cyrillic letters`, () => {
    expect(checkPassword('перевіркаd1!')).toBe(false);
  });
});
