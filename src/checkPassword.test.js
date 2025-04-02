'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('qwerty')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Qwerty2$')).toBe(true);
  });

  it(`should return 'false' for the valid password with 4 characters`, () => {
    expect(checkPassword('Qw2$')).toBe(false);
  });

  it(`should return 'false' for the valid password with 7 characters`, () => {
    expect(checkPassword('Qwert2$')).toBe(false);
  });

  it(`should return 'true' for the valid password with 12 characters`, () => {
    expect(checkPassword('Qwertyuiop2$')).toBe(true);
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('Qwertyuiopasdf2$')).toBe(true);
  });

  it(`should return 'false' for the valid password with 17 characters`, () => {
    expect(checkPassword('Qwertyuiopasdf12$')).toBe(false);
  });

  it(`should return 'false' for the valid password which doesn't
  contain at least 1 digit`, () => {
    expect(checkPassword('Qwertyuiop$')).toBe(false);
  });

  it(`should return 'false' for the valid password which doesn't
  contain at least 1 special character`, () => {
    expect(checkPassword('Qwertyuiop2')).toBe(false);
  });

  it(`should return 'false' for the valid password which doesn't
  contain at least 1 uppercase letter`, () => {
    expect(checkPassword('wertyuiop2$')).toBe(false);
  });

});
