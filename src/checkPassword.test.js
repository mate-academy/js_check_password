'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(checkPassword('')).toEqual(expect.any(Boolean));
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('12?Qwery')).toBeTruthy();
  });

  it(`should return 'true' for the valid password with 15 characters`, () => {
    expect(checkPassword('12?QwerySdQwery')).toBeTruthy();
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('12?QwerySdQwery!')).toBeTruthy();
  });

  it(`should return 'true' for the valid password with at least one special`, () => {
    expect(checkPassword('12?QwerySdQwery')).toBeTruthy();
  });

  it(`should return 'true' for the valid password with at least one number`, () => {
    expect(checkPassword('1?QwerySdQwery')).toBeTruthy();
  });

  it(`should return 'true' for the valid password with at least one capital letter`, () => {
    expect(checkPassword('1?Qwerydwery')).toBeTruthy();
  });

  // Negative scenario:

  it(`should return 'false' for the password shorter than 8 characters`, () => {
    expect(checkPassword('1?Qwery')).toBeFalsy();
  });

  it(`should return 'false' for the password longer than 16 characters`, () => {
    expect(checkPassword('1?Qwery1?Qwerycsd')).toBeFalsy();
  });

  it(`should return 'false' for the password longer than 255 characters`, () => {
    expect(checkPassword(`1?Qwery1?Qwerycsd1?Qwery1?Qwerycsd1?Qwery1?Qwerycs
      1?Qwery1?Qwerycsd1?Qwery1?Qwerycsd1?Qwery1?Qwerycsd1?Qwery1?Qwerycsd1?
      1?Qwery1?Qwerycsd1?Qwery1?Qwerycsd1?Qwery1?Qwerycsd1?Qwery1?Qwerycsd1?  
      1?Qwery1?Qwerycsd1?Qwery1?Qwerycsd1?Qwery1?Qwerycsd1?Qwery1?Qwerycsd1?`)).toBeFalsy();
  });

  it(`should return 'false' for the password without at least one capital character`, () => {
    expect(checkPassword('1?wery1?werycsd')).toBeFalsy();
  });

  it(`should return 'false' for the password without at least one special symbol`, () => {
    expect(checkPassword('1Qwery1Qwerycsd')).toBeFalsy();
  });

  it(`should return 'false' for the password without at least one integer`, () => {
    expect(checkPassword('?Qwery?Qwerycsd')).toBeFalsy();
  });

  it(`should return 'false' for the password with at least one cyrillic symbol`, () => {
    expect(checkPassword('йQwery1Qwerycsd!')).toBeFalsy();
  });

  it(`should return 'false' for blank password`, () => {
    expect(checkPassword('')).toBeFalsy();
  });

  it(`should throw arror if not-string data type is pasted`, () => {
    expect(() => checkPassword(true)).toThrow();
  });

});
