'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('P@ssw0rd')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('6ters@KI')).toBeTruthy();
  });

  // write more tests here

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('Passwordis6ters@')).toBeTruthy();
  });

  it(`should return 'false' for the password with non-Latin letters`, () => {
    expect(checkPassword('П@р0льмой')).toBeFalsy();
  });

  it(`should return 'false' for the valid password with 7 characters`, () => {
    expect(checkPassword('6ters@I')).toBeFalsy();
  });

  it(`should return 'false' for the valid password with 17 characters`, () => {
    expect(checkPassword('Passwordis6ters@3')).toBeFalsy();
  });

  it(`should return 'false' for the password without capital letters`, () => {
    expect(checkPassword('6ters@ki')).toBeFalsy();
  });

  it(`should return 'false' for the password without special symbols`, () => {
    expect(checkPassword('6tersaki')).toBeFalsy();
  });

  it(`should return 'false' for the password without numbers`, () => {
    expect(checkPassword('sisteres!')).toBeFalsy();
  });
});
