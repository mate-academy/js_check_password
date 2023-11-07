'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(checkPassword('Wtyq*4yq5h')).toBeTruthy();
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Qw34*678')).toBeTruthy();
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('Qw34*6qrtyuier78')).toBeTruthy();
  });

  it(`should return 'false' for the password with 7 or less characters`, () => {
    expect(checkPassword('Qw34*68')).toBeFalsy();
  });

  it(`should return 'false' for the password
   with 17 or more characters`, () => {
    expect(checkPassword('Qw34*6qrtyuier78-')).toBeFalsy();
  });

  it(`should return 'false' for the empty password`, () => {
    expect(checkPassword('')).toBeFalsy();
  });

  it(`should return 'false' for the password without speсial symbol(s)`, () => {
    expect(checkPassword('eARgy34g2q3')).toBeFalsy();
  });

  it(`should return 'false' for the password without capital char(s)`, () => {
    expect(checkPassword('ear-y34g2q3')).toBeFalsy();
  });

  it(`should return 'false' for the password without latin char(s)`, () => {
    expect(checkPassword('Ййцукен-312')).toBeFalsy();
  });

  it(`should return 'false' for the password without number(s)`, () => {
    expect(checkPassword('Qwerty&#tr')).toBeFalsy();
  });
});
