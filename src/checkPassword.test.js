'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = checkPassword('Password1!');

    expect(typeof result).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    const result = checkPassword('Passwo1!');

    expect(result).toBe(true);
  });

  it(`should return 'false' for password with length less than 8 chars`, () => {
    const result = checkPassword('Q!1wert');

    expect(result).toBe(false);
  });

  it(`should return 'false' for password with length great that 16 chars`, () => {
    const result = checkPassword('Q!1wertdvdsvsdvsdvsdvsdvdsv');

    expect(result).toBe(false);
  });

  it(`should return 'false' for password contains not Lating chars`, () => {
    const result = checkPassword('А!123СБАЛВ');

    expect(result).toBe(false);
  });

  it(`should return 'false' for password not contained digit`, () => {
    const result = checkPassword('Str@ngaaa');

    expect(result).toBe(false);
  });

  it(`should return 'false' for password not contained special char`, () => {
    const result = checkPassword('Str12ngaaa');

    expect(result).toBe(false);
  });

  it(`should return 'false' for password not contained uppercase letter`, () => {
    const result = checkPassword('str@nga123');

    expect(result).toBe(false);
  });

  it(`should return 'false' for 'qwerty'`, () => {
    expect(checkPassword('qwerty')).toBe(false);
  });

  it(`should return 'false' for 'Str@ng'`, () => {
    expect(checkPassword('Str@ng')).toBe(false);
  });

  it(`should return 'true' for 'Password1!'`, () => {
    expect(checkPassword('Password1!')).toBe(true);
  });
});
