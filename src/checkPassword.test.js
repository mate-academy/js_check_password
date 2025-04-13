'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('Password1!')).toEqual('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Password1!')).toEqual(true);
  });

  it(`should return 'false' for the password with 7 or less characters`, () => {
    expect(checkPassword('qwerty')).toEqual(false);
  });

  it(`should return 'false' for the password without at least 1
  digit, 1 special character, 1 uppercase letter`, () => {
    expect(checkPassword('qwerty1')).toEqual(false);
  });
});
