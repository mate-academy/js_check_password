'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('te$tpaSs7')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Tee$t1ng')).toBe(true);
  });

  it(`should return 'false' for the empty password field`, () => {
    expect(checkPassword('')).toBe(false);
  });

  it(`should return 'false' if password length less than 8`, () => {
    expect(checkPassword('Tee$t1n')).toBe(false);
  });

  it(`should return 'false' if password length more than 16`, () => {
    expect(checkPassword('Pas$w0rdMoreThan17')).toBe(false);
  });

  it(`should return 'false' if password contains only with spaces`, () => {
    expect(checkPassword('          ')).toBe(false);
  });

  it(`should return 'false' if password contains at least with capital letter,
    special symbol, 8 charachters length and without digit`, () => {
    expect(checkPassword('Te$tning')).toBe(false);
  });

  it(`should return 'false' if password contains at least with capital letter,
  digit, 8 charachters length and without special symbol`, () => {
    expect(checkPassword('Testn1ng')).toBe(false);
  });

  it(`should return 'false' if password contains at least with digit,
  special symbol, 8 charachters length and without capital letter`, () => {
    expect(checkPassword('te$tn1ng')).toBe(false);
  });

  it(`should return 'false' if there are spaces
   at the beginning of the password`, () => {
    expect(checkPassword(' Tee$t1ng')).toBe(false);
  });

  it(`should return 'false' if there are spaces
   at the ending of the password`, () => {
    expect(checkPassword('Tee$t1ng ')).toBe(false);
  });
});
