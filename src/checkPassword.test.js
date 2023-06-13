'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`Should accept a string value`, () => {
    const password = 'Password1&';

    checkPassword(password);

    const typeInputValue = typeof password;

    expect(typeInputValue).toBe('string');
  });

  it(`should return boolean`, () => {
    const result = typeof checkPassword('hvv1T&km');

    expect(result).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Passw06&')).toBe(true);
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('Passwordpasswo6&')).toBe(true);
  });

  it(`should return 'false' for the  password with cyrilic letters`, () => {
    expect(checkPassword('Worldф2%')).toBe(false);
  });

  it(`should return 'false' for the  password without capital letter`, () => {
    expect(checkPassword('worldf2%')).toBe(false);
  });

  it(`should return 'false' for the  password without number`, () => {
    expect(checkPassword('Worldfr%')).toBe(false);
  });

  it(`should return 'false' for the  password without special characters`,
    () => {
      expect(checkPassword('Worldfr1f')).toBe(false);
    });

  it(`should return 'false' for the valid password with 7 characters`, () => {
    expect(checkPassword('World1%')).toBe(false);
  });

  it(`should return 'false' for the valid password with 17 characters`, () => {
    expect(checkPassword('World1%ghyjyhgfdr')).toBe(false);
  });
});
