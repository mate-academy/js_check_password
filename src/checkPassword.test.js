'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('P@ssword!1')).toBe('boolean');
  });

  it(`should return true if password is from 8 to 16 symbs length, 
  containing at leaast one digit, one special character, one uppercase letter 
  and all present letters are latin`, () => {
    expect(checkPassword('P@ssword1!')).toBe(true);
  });

  it(`should return false if password contain`
  + ` non cyryllic or non latin letters `, () => {
    expect(checkPassword('Pأنت لطيفssword1!')).toBe(false);
  });

  it(`should return false if password is shorter than 8 symbs `, () => {
    expect(checkPassword('P@s1!')).toBe(false);
  });

  it(`should return false`
  + ` if password is longer than 16 symbs `, () => {
    expect(checkPassword('P@ssword111111!!!!!!!!!')).toBe(false);
  });

  it(`should return false if `
  + `password dont have at least one digit  `, () => {
    expect(checkPassword('P@!!ssword')).toBe(false);
  });

  it(`should return false if it
   dont have at least one special character  `, () => {
    expect(checkPassword('P111ssword')).toBe(false);
  });

  it(`should return false if password 
  dont have at least one uppercase symb  `, () => {
    expect(checkPassword('1fff@ssword')).toBe(false);
  });
});
