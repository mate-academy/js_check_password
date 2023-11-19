'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = checkPassword('dog');

    expect(typeof result).toBe('boolean');
  });

  it(`should return 'false' for the password without one digit,
    password > 8 characters`, () => {
    const result = checkPassword('Academy!');

    expect(result).toBeFalsy();
  });

  it(`should return 'false' for the password without one special character,
    password > 8 characters`, () => {
    const result = checkPassword('Academy1');

    expect(result).toBeFalsy();
  });

  it(`should return 'false' for the password without one uppercase letter,
    password > 8 characters`, () => {
    const result = checkPassword('academy1!');

    expect(result).toBeFalsy();
  });

  it(`should return 'false' for the password < 8 characters`, () => {
    const result = checkPassword('Apple1!');

    expect(result).toBeFalsy();
  });

  it(`should return 'false' for the password > 16 characters`, () => {
    const result = checkPassword('Academy1!Academy1!');

    expect(result).toBeFalsy();
  });

  it(`should return 'false' for the password
  with Cyrillic character`, () => {
    const password = 'Acadeцy1!';
    const result = checkPassword(password);

    expect(result).toBeFalsy();
  });

  it(`should return 'true' for the valid password
  with 8 Latin characters`, () => {
    const result = checkPassword('Letter1!');

    expect(result).toBeTruthy();
  });
});
