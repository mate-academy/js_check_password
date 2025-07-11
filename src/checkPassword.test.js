'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    const actual = checkPassword('Passwo1!');

    expect(actual).toEqual(true);
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    const actual = checkPassword('Password1616?!?!');

    expect(actual).toEqual(true);
  });

  it(`should return 'false' for the invalid password with 7 characters`, () => {
    const actual = checkPassword('Passw1!');

    expect(actual).toEqual(false);
  });

  it(`should return 'false' for the invalid
    password with 17 characters`, () => {
    const actual = checkPassword('Password17171?!?!');

    expect(actual).toEqual(false);
  });

  it(`should return 'false' if the password doesn't contain digit`, () => {
    const actual = checkPassword('Password!');

    expect(actual).toEqual(false);
  });

  it(`should return 'false' if the password doesn't
    contain special character`, () => {
    const actual = checkPassword('Password1');

    expect(actual).toEqual(false);
  });

  it(`should return 'false' if the password doesn't
    contain uppercase letter`, () => {
    const actual = checkPassword('password1!');

    expect(actual).toEqual(false);
  });
});
