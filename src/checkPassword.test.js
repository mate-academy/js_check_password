'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {

  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Password1!')).toBe(true);
  });

  it(`should return 'false' for too short password`, () => {
    expect(checkPassword('qwe')).toBe(false);
  });

  it(`should return 'false' for too long password`, () => {
    expect(checkPassword('Passw$!ordfrf121!')).toBe(false);
  });
});
