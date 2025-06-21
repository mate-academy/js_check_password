'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = checkPassword('123');

    expect(typeof result).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    const result = checkPassword('Password1!');

    expect(result).toBe(true);
  });

  it('should accept max 16 charakters in password', () => {
    const result = checkPassword(
      'Password1!Passwor'
    );

    expect(result).toBe(false);
  });

  it('should require min 1 upper-case letter', () => {
    const result = checkPassword('password1!');

    expect(result).toBe(false);
  });

  it('should require min one special charakter', () => {
    const result = checkPassword('Password11');

    expect(result).toBe(false);
  });

  it('should require min one digit', () => {
    const result = checkPassword('Password!!');

    expect(result).toBe(false);
  });
});
