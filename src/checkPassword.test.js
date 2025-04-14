'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = checkPassword('ValidP@ssw0rd');

    expect(typeof result).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    const validPassword = 'Abc!2345';
    const result = checkPassword(validPassword);

    expect(result).toBe(true);
  });

  it(`should return 'false' for an invalid password with less `
    + `then 8 characters`, () => {
    const invalidPassword = 'Abc123';
    const result = checkPassword(invalidPassword);

    expect(result).toBe(false);
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    const validPassword = 'Abc!23455432!cdA';
    const result = checkPassword(validPassword);

    expect(result).toBe(true);
  });

  it(`should return 'false' for an invalid password with more `
    + `then 16 characters`, () => {
    const invalidPassword = '@bcdefghij1234567';
    const result = checkPassword(invalidPassword);

    expect(result).toBe(false);
  }
  );

  it(`should return 'false' for an invalid password missing `
    + `an uppercase letter`, () => {
    const invalidPassword = 'abc!1234';
    const result = checkPassword(invalidPassword);

    expect(result).toBe(false);
  });

  it(`should return 'false' for an invalid password missing a digit`, () => {
    const invalidPassword = 'ABC!abcd';
    const result = checkPassword(invalidPassword);

    expect(result).toBe(false);
  });

  it(`should return 'false' for an invalid password missing `
    + `a special character`, () => {
    const invalidPassword = 'ABC123ab';
    const result = checkPassword(invalidPassword);

    expect(result).toBe(false);
  });

  it(`should return 'false' for an empty password`, () => {
    const emptyPassword = '';
    const result = checkPassword(emptyPassword);

    expect(result).toBe(false);
  });
});
