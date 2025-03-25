'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Password1!')).toBe(true);
  });

  it(`should return 'false' if password has more than 16 characters`, () => {
    expect(checkPassword('Password1!qwertyu')).toBe(false);
  });

  it(`should return 'false' if password has less than 8 characters`, () => {
    expect(checkPassword('qwerty')).toBe(false);
  });

  it(`should return 'false' if password accepts another 
   letters except of the Latin alphabet`, () => {
    expect(checkPassword('qweytосьоFr')).toBe(false);
  });

  it(`should return 'false' for the valid password with 8 char.
   without digits `, () => {
    expect(checkPassword('Password@!')).toBe(false);
  });

  it(`should return 'false' for the valid password with 8 char.
   without special symbols `, () => {
    expect(checkPassword('Password123')).toBe(false);
  });

  it(`should return 'false' for the valid password with 8 char.
   without uppercase letter `, () => {
    expect(checkPassword('password2!')).toBe(false);
  });

  // write more tests here
});
