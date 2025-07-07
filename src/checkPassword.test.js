'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = checkPassword('///cjdjjicn');

    expect(typeof result).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Password1!')).toBe(true);
  });

  it(`should return 'false' for the invalid password
      with more than 16 or less then 8 characters`, () => {
    expect(checkPassword('Password1!1478596')).toBe(false);
    expect(checkPassword('Pass')).toBe(false);
  });

  it(`should return 'false' if no at least 1 digit,
    1 special character, 1 uppercase letter`, () => {
    expect(checkPassword('Passwordo!')).toBe(false);
    expect(checkPassword('Password1e')).toBe(false);
    expect(checkPassword('password1!')).toBe(false);
  });

  it(`accepts only letters of the Latin alphabet Aa-Zz`, () => {
    expect(checkPassword('Ягідник!1245')).toBe(false);
  });
});
