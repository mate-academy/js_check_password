'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = checkPassword('Password1!');

    expect(typeof result).toBe(typeof true);
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    const result = checkPassword('Passwo1!');

    expect(result).toBeTruthy();
  });

  it(`should return 'true' for the valid password with 10 characters`, () => {
    const result = checkPassword('Password1!');

    expect(result).toBeTruthy();
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    const result = checkPassword('PasswordPasswo1!');

    expect(result).toBeTruthy();
  });

  it(`should return 'false' for non-Latin alphabet`, () => {
    const result = checkPassword('Тестт1!');

    expect(result).toBeFalsy();
  });

  it(`should return 'false' for 7 characters`, () => {
    const result = checkPassword('Paswo1!');

    expect(result).toBeFalsy();
  });

  it(`should return 'false' for 17 characters`, () => {
    const result = checkPassword('PasswordPasswor1!');

    expect(result).toBeFalsy();
  });

  it(`should return 'false' without digit`, () => {
    const result = checkPassword('Password!');

    expect(result).toBeFalsy();
  });

  it(`should return 'false' without special character`, () => {
    const result = checkPassword('Password1');

    expect(result).toBeFalsy();
  });

  it(`should return 'false' without uppercase letter`, () => {
    const result = checkPassword('paswor1!');

    expect(result).toBeFalsy();
  });
});
