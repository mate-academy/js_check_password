'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeDefined();
  });

  it(`should return boolean`, () => {
    const check = checkPassword('sam1@Zqwer');

    expect(typeof check).toBe('boolean');
  });

  it(`should return 'true' for password with exactly  8 characters`, () => {
    expect(checkPassword('sam1@Zqw')).toBe(true);
  });

  it(`should return 'true' for the valid password`, () => {
    expect(checkPassword('sam1@Zqwer')).toBe(true);
    expect(checkPassword('jACK1__lol')).toBe(true);
  });

  it(`should return 'false' for password bellow 8 characters`, () => {
    expect(checkPassword('sam1@Za')).toBe(false);
  });

  it(`should return 'false' for password abowe 16 characters`, () => {
    expect(checkPassword('sam1@Zqwertyuiopa')).toBe(false);
  });

  it(`should return 'false' for password not containing at least
     1 digit, 1 special character, 1 uppercase letter`, () => {
    expect(checkPassword('sam1#asdfgh')).toBe(false);
    expect(checkPassword('samAs#dfghj')).toBe(false);
    expect(checkPassword('samA123asdf')).toBe(false);
  });
});
