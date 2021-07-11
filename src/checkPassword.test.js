'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('bB@1olpnop')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Ab/(?=7m')).toBe(true);
  });

  it(`should return 'true' for the valid password with 10 characters`, () => {
    expect(checkPassword('Ab.*)67%][')).toBe(true);
  });

  it(`should return 'false' for the valid password with 7 characters`, () => {
    expect(checkPassword('Ab@!5kL')).toBe(false);
  });

  it(`should return 'false' for the valid password with 17 characters`, () => {
    expect(checkPassword('Asc45=+@iujDvb@kl')).toBe(false);
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('Ab-_{,$8@}!+rt10')).toBe(true);
  });

  it(`should return 'false' for the valid password with 8 characters`, () => {
    expect(checkPassword('abcd5@&l')).toBe(false);
  });

  it(`should return 'false' for the valid password with 8 characters`, () => {
    expect(checkPassword('ABCD@78W')).toBe(false);
  });

  it(`should return 'false' for the valid password with 10 characters`, () => {
    expect(checkPassword('ABCdr$@klm')).toBe(false);
  });

  it(`should return 'false' for the valid password with 10 characters`, () => {
    expect(checkPassword('AbCd5678kl')).toBe(false);
  });

  it(`should return 'false' for the valid password with 10 characters`, () => {
    expect(checkPassword('АбВг45Х{}]')).toBe(false);
  });

  // write more tests here
});
