'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('')).toEqual('boolean');
  });

  it(`should return 'false' for the valid password with 7 characters`, () => {
    expect(checkPassword('Qwert_7')).toEqual(false);
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Qwerty_8')).toEqual(true);
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('Qwertyhj_qwery16')).toEqual(true);
  });

  it(`should return 'false' for the valid password with 17 characters`, () => {
    expect(checkPassword('Qwertyhj_qwerty17')).toEqual(false);
  });

  it(`should return 'false' for the invalid password
    (contain non Latin letters)`, () => {
    expect(checkPassword('Qwert_ы8')).toEqual(false);
  });

  it(`should return 'false' for the invalid password
    (contain non-printable characters)`, () => {
    expect(checkPassword('Qwert _8')).toEqual(false);
  });

  it(`should return 'false' for the invalid password
    (does not contain at least one special symbol)`, () => {
    expect(checkPassword('Qwerty78')).toEqual(false);
  });

  it(`should return 'false' for the invalid password
    (does not contain at least one digit)`, () => {
    expect(checkPassword('Qwerty_&')).toEqual(false);
  });

  it(`should return 'false' for the invalid password
    (does not contain at least one uppercase letter)`, () => {
    expect(checkPassword('qwerty_8')).toEqual(false);
  });
});
