'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('password')).toBe('boolean');
  });

  it(`should return 'true' for the password with 8 cahracters`, () => {
    expect(checkPassword('Passwo1!')).toBe(true);
  });

  it(`should accept only letters of the Latin alphabet 'Aa-Zz'`, () => {
    expect(checkPassword('Парроль1!')).toBe(false);
  });

  it(`should return 'false' for the password with 7 characters`, () => {
    expect(checkPassword('Passw1!')).toBe(false);
  });

  it(`should return 'true' for the password with 10 characters`, () => {
    expect(checkPassword('Password1!')).toBe(true);
  });

  it(`should return 'true' for the password with 16 characters`, () => {
    expect(checkPassword('Passwordpasswo1!')).toBe(true);
  });

  it(`should return 'false' for the password with 17 characters`, () => {
    expect(checkPassword('Passwordpasswor1!')).toBe(false);
  });

  it(`should return 'false' when valid but without digits`, () => {
    expect(checkPassword('Password!')).toBe(false);
  });

  it(`should return 'false' when valid but without spec. char.`, () => {
    expect(checkPassword('Password1')).toBe(false);
  });

  it(`should return 'false' when valid but without an uppercase`, () => {
    expect(checkPassword('password1!')).toBe(false);
  });
});
