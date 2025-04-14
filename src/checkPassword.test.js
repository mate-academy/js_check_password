'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const boolean = checkPassword('');

    expect(typeof boolean).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    const truthy = checkPassword('A1@pasword');

    expect(truthy).toBeTruthy();
  });

  it(`should return 'false' for a password that contains`
    + ` non-English characters`, () => {
    const falsy = checkPassword('Я1@pasword');

    expect(falsy).toBeFalsy();
  });

  it(`should return "false" for a password of less than 8 characters`, () => {
    const falsy = checkPassword('A1@pas');

    expect(falsy).toBeFalsy();
  });

  it(`should return "false" for a password longer than 16 characters`, () => {
    const falsy = checkPassword('Pasword1@pasword18');

    expect(falsy).toBeFalsy();
  });

  it(`should return "false" for a password without number`, () => {
    const falsy = checkPassword('Pasword@pasword');

    expect(falsy).toBeFalsy();
  });

  it(`should return "false" for a password without special character`, () => {
    const falsy = checkPassword('Pasword1');

    expect(falsy).toBeFalsy();
  });

  it(`should return "false" for a password`
    + ` that does not contain an uppercase letter`, () => {
    const falsy = checkPassword('pasword@1');

    expect(falsy).toBeFalsy();
  });
});
