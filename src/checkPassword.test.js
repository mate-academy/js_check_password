'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('Pas$wor1')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Pas$wor1')).toBe(true);
  });

  it(`should return 'false' for the valid password with 7 characters`, () => {
    expect(checkPassword('Pas$wr1')).toBe(false);
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('Pas$word1q2w3e4r')).toBe(true);
  });

  it(`should return 'false' for the password with 17 characters`, () => {
    expect(checkPassword('Pas$word1q2w3e4r/')).toBe(false);
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Pas$wor1')).toBe(true);
  });

  it(`should return 'false' for the password with 7 characters`, () => {
    expect(checkPassword('Pas$wr1')).toBe(false);
  });

  it(`should return 'true' for the valid password with 12 characters`, () => {
    expect(checkPassword('Pas$wor12q!@')).toBe(true);
  });

  it(`should return 'false' for the 12 characters password 
  with digit and special symbol but without uppercase letter`, () => {
    expect(checkPassword('1as$wordaq!@')).toBe(false);
  });

  it(`should return 'false' for the 12 characters password 
  with uppercase letter and special symbol but without digits`, () => {
    expect(checkPassword('Pas$wordaq!@')).toBe(false);
  });

  it(`should return 'false' for the 12 characters password 
  with uppercase letter and digit but without special symbol`, () => {
    expect(checkPassword('PasswordWq12')).toBe(false);
  });

  it(`should return 'false' for the 12 characters password with uppercase 
  letter, digit, special symbol, but with Cyrillic letter`, () => {
    expect(checkPassword('Пas$wOrd@q12')).toBe(false);
  });

  it(`should return 'false' for the 5 characters password with uppercase 
  letter, digit, special symbol`, () => {
    expect(checkPassword('Pas$1')).toBe(false);
  });

  it(`should return 'false' for the 20 characters password with uppercase 
  letter, digit, special symbol`, () => {
    expect(checkPassword('Pas$1Wor@2And/3AgaI&')).toBe(false);
  });

  it(`should return 'false' for the blank password`, () => {
    expect(checkPassword('')).toBe(false);
  });
});
