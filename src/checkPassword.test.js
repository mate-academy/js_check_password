'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('asd')).toBe('boolean')
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Password123!')).toBe(true);
  });

  it(`should return 'false' 
    for the password which contains non-english characters`, () => {
    expect(checkPassword('тестTest123!')).toBe(false);
  });

  it(`should return 'false' 
    for the password which has less than 8 characters`, () => {
    expect(checkPassword('T!2')).toBe(false);
  });

  it(`should return 'false' 
    for the password which has over than 16 characters`, () => {
    expect(checkPassword('Test123!12314151514513451')).toBe(false);
  });

  it(`should return 'false' 
    for the password which is missing at least one uppercase letter`, () => {
    expect(checkPassword('test123!')).toBe(false);
  });

  it(`should return 'false' 
    for the password which is missing at least one digit`, () => {
    expect(checkPassword('Test!')).toBe(false);
  });

  it(`should return false 
    for the password which is missing at least one special character`, () => {
    expect(checkPassword('Test123')).toBe(false);
  });
});
