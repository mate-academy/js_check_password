'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('abcd')).toBe('boolean');
  });

  it(`should return 'true'
    for the valid password with 8 characters`, () => {
    expect(checkPassword('Password1!')).toBe(true);
  });

  it(`should return 'false'
    for the invalid password with 6 characters`, () => {
    expect(checkPassword('qwerty')).toBe(false);
  });

  it(`should return 'false'
    for the invalid password with 6 characters`, () => {
    expect(checkPassword('Str@ng')).toBe(false);
  });

  it(`should return 'true'
    for the valid password with 15 characters`, () => {
    expect(checkPassword('Mate_Academy_#1')).toBe(true);
  });

  it(`should return 'false'
    for the valid password with 21 characters`, () => {
    expect(checkPassword('mynameisYehormyageis19!')).toBe(false);
  });

  it(`should return 'false'
    for the invalid password with 8 characters`, () => {
    expect(checkPassword('12345678')).toBe(false);
  });

  it(`should return 'false'
    for the invalid password with 14 characters`, () => {
    expect(checkPassword('qwerty12345678')).toBe(false);
  });

  it(`should return 'true'
    for the valid password with 11 characters`, () => {
    expect(checkPassword('qwerty1234!')).toBe(false);
  });
});
