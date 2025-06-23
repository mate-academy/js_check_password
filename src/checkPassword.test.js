'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = checkPassword('vAl!d123');

    expect(result).toBe(true);
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    const result = checkPassword('vAl!d123');

    expect(result).toBe(true);
  });

  it(`should return 'false' for the password with less than 8 characters`,
    () => {
      const result = checkPassword('short');

      expect(result).toBe(false);
    });

  it('should accept only letters of the Latin alphabet', () => {
    const result = checkPassword('validPass有効');

    expect(result).toBe(false);
  });

  it('should be maximum 16 characters inclusive', () => {
    const result = checkPassword('thisIsAVeryLongPassword');

    expect(result).toBe(false);
  });

  it('should contain at least 1 digit, 1 special character, 1 uppercase letter',
    () => {
      const result = checkPassword('Valid1@y');
      expect(result).toBe(true);
    });
});
