'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(checkPassword).toBeTruthy();
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('gHkod1y!')).toBeTruthy();
  });

  it(`should return 'false' for the invalid password with 7 characters`, () => {
    expect(checkPassword('gHk!d1y')).toBeFalsy();
  });

  it(`should return 'false' for the invalid password
     without 1 special character`, () => {
    expect(checkPassword('gHkod1yr')).toBeFalsy();
  });

  it(`should return 'false' for the invalid password without 1 digit`, () => {
    expect(checkPassword('gHkod!yrgk')).toBeFalsy();
  });

  it(`should return 'false' for the invalid password
     without 1 capital letter`, () => {
    expect(checkPassword('gHkod!yrvjh')).toBeFalsy();
  });

  it(`should return 'false' for the invalid password 
    with 17 characters`, () => {
    expect(checkPassword('gHkod1ypassword!!')).toBeFalsy();
  });

  it(`should return 'false' for the invalid password 
    without any characters`, () => {
    expect(checkPassword('')).toBeFalsy();
  });
  // write more tests here
});
