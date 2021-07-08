'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('e21r1d12')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Qwerty123!')).toBeTruthy();
  });

  it(`should return 'false' for the password with non Latin symbols`, () => {
    expect(checkPassword('Четверг123!')).toBeFalsy();
  });

  it(`should return 'false' for the valid password with 7 characters`, () => {
    expect(checkPassword('Qwert1!')).toBeFalsy();
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('Qwerty123!Qwerty')).toBeTruthy();
  });

  it(`should return 'false' for the valid password with 17 characters`, () => {
    expect(checkPassword('Qwerty123!Qwerty1')).toBeFalsy();
  });

  it(`should return 'true' for the valid password with 12 characters`, () => {
    expect(checkPassword('Qwerty123!Qw')).toBeTruthy();
  });

  it(`should return 'false' for the password without
   1 digit but with 1 special symbol and 1 uppercase letter`, () => {
    expect(checkPassword('Qwertyq!')).toBeFalsy();
  });

  it(`should return 'false' for the password without
   1 special symbol but with 1 number and 1 uppercase letter`, () => {
    expect(checkPassword('Qwertyq1')).toBeFalsy();
  });

  it(`should return 'false' for the password without
   1 uppercase symbol but with 1 number and 1 special symbol`, () => {
    expect(checkPassword('qwerty1!')).toBeFalsy();
  });
});
