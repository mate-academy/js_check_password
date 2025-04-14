'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = checkPassword('test');

    expect(typeof result).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    const result = checkPassword('P@asswo1d');

    expect(result).toBe(true);
  });

  // write more tests here

  it('should have at least 8 numbers', () => {
    const result = checkPassword('P@wo1d');

    expect(result).toBe(false);
  });

  it('should have not more that 16 numbers', () => {
    const result = checkPassword('P@wo1ddawdafwfawfawfawfawf');

    expect(result).toBe(false);
  });

  it('should have at least 1 digit 1 uppercase and 1 symbol', () => {
    const result = checkPassword('testtest');

    expect(result).toBe(false);
  });
});
