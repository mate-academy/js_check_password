'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('checkPassword1!')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('checkP1!')).toBeTruthy();
  });

  it(`should return 'false' for the invalid password with 7 characters`, () => {
    expect(checkPassword('check1!')).toBeFalsy();
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('checkPas1234567!')).toBeTruthy();
  });

  it(`should return 'false' for the invalid password 
  with 17 characters`, () => {
    expect(checkPassword('checkPas12345678!')).toBeFalsy();
  });

  it(`should return 'false' for the invalid password 
  with 1 digit, 1 special character and NO capital letter`, () => {
    expect(checkPassword('checkas12345678!')).toBeFalsy();
  });

  it(`should return 'false' for the invalid password 
  with 1 digit, 1 capital letter and NO special character,`, () => {
    expect(checkPassword('checkPas12345678')).toBeFalsy();
  });

  it(`should return 'false' for the invalid password 
  with 1 capital letter, 1 special character and NO digit`, () => {
    expect(checkPassword('checkPas!')).toBeFalsy();
  });

  it(`should return 'false' for the invalid password 
  with cyrillic character`, () => {
    expect(checkPassword('checkP1!я')).toBeFalsy();
  });
});
