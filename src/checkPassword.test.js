'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = checkPassword('123123');

    expect(typeof result).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    const trueResult = checkPassword('123@Asdf');

    expect(trueResult).toBe(true);
  });

  it(`should return "false" for invalid
      password less than 8 characters`, () => {
    const falseResult = checkPassword('12234567');

    expect(falseResult).toBe(false);
  });

  it(`should return "false" for a valid
      password longer than 16 characters`, () => {
    const falseResult = checkPassword('123@Asdf123@Asdf2');

    expect(falseResult).toBe(false);
  });

  it(`should return "false" if the password
      does not contain at least 1 digit`, () => {
    const falseResult = checkPassword('aaa@Asdf');

    expect(falseResult).toBe(false);
  });

  it(`should return "false" if the password does
      not contain at least 1 special character`, () => {
    const falseResult = checkPassword('123AAsdf');

    expect(falseResult).toBe(false);
  });

  it(`should return "false" if the password
      does not contain at least 1 uppercase letter`, () => {
    const falseResult = checkPassword('123@asdf');

    expect(falseResult).toBe(false);
  });
});
