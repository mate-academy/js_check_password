'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(checkPassword('abcd')).toBe(false);
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('O=MY7ymO')).toBe(true);
  });

  it(`should return 'false' for the valid password with less than 
  8 characters`, () => {
    expect(checkPassword('O=M7mO')).toBe(false);
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('O=MY7ymOP-VE3evP')).toBe(true);
  });

  it(`should return 'false' for the valid password with more than
  16 characters`, () => {
    expect(checkPassword('O=MY7ymOP-VE3evPO=MY')).toBe(false);
  });

  it(`should return 'true' for the password without cyrillic letters`, () => {
    expect(checkPassword('O=MY7ymOP-VE3evP')).toBe(true);
  });

  it(`should return 'false' for the password with 
  cyrillic letters`, () => {
    expect(checkPassword('O=MЯ7ymOP-VE3evP')).toBe(false);
  });

  it(`should return 'false' for the password which not 
  contains at least 1 digit`, () => {
    expect(checkPassword('O=MYymOP-VEevP')).toBe(false);
  });

  it(`should return 'false' for the password which not 
  contains at least 1 special character`, () => {
    expect(checkPassword('OMY7ymOPVE3evP')).toBe(false);
  });

  it(`should return 'false' for the password which not 
  contains at least 1 uppercase letter`, () => {
    expect(checkPassword('o=my7ymop-ve3evp')).toBe(false);
  });
});
