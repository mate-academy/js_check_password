'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('Valid@123')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Valid@123')).toBe(true);
  });

  it(`should return 'false' for password without uppercase letter`, () => {
    expect(checkPassword('valid@123')).toBe(false);
  });

  it(`should return 'false' for password without lowercase letter`, () => {
    expect(checkPassword('VALID@123')).toBe(false);
  });

  it(`should return 'false' for password without digit`, () => {
    expect(checkPassword('Valid@abc')).toBe(false);
  });

  it(`should return 'false' for password without special character`, () => {
    expect(checkPassword('Valid1234')).toBe(false);
  });

  it(`should return 'false' for password with cyrillic characters`, () => {
    expect(checkPassword('Valid@123АБВ')).toBe(false);
  });

  it(`should return 'false' for password shorter than 8 characters`, () => {
    expect(checkPassword('V@1a')).toBe(false);
  });

  it(`should return 'false' for password longer than 16 characters`, () => {
    expect(checkPassword('Valid@1234567890Ab')).toBe(false);
  });
});
