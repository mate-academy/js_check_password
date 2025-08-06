'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = checkPassword('P@assword1');

    expect(typeof result).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    const result = checkPassword('P@assword1');

    expect(result).toBe(true);
  });

  it(`should return 'true' is password contain only latina letters`, () => {
    const result = checkPassword('P@assword1');

    expect(result).toBe(true);
  });

  it(`sholuld return 'false' is password contain non-latin letters`, () => {
    const result = checkPassword('жP@assword1');

    expect(result).toBe(false);
  });

  it(`should return 'true' if password contain at lest 8 characters`, () => {
    const result = checkPassword('P@asswo1');

    expect(result).toBe(true);
  });

  it(`should return 'false' if password contain less than 8 characters`, () => {
    const result = checkPassword('P@d1');

    expect(result).toBe(false);
  });

  it(`should return 'false' if password contain more than 16 characters`,
    () => {
      const result = checkPassword('1P@asswo1P@asswo1');

      expect(result).toBe(false);
    });

  it(`should return 'true' if password contain at lest one digit`,
    () => {
      const result = checkPassword('P@asswo1');

      expect(result).toBe(true);
    });

  it(`should return 'false' if password does not contain at lest one digit`,
    () => {
      const result = checkPassword('P@aasswo');

      expect(result).toBe(false);
    });

  it(`should return 'true' if password contain at least one uppercase letter`,
    () => {
      const result = checkPassword('P@asswo1');

      expect(result).toBe(true);
    });

  it(`should return 'false' if password does not contain one uppercase letter`,
    () => {
      const result = checkPassword('p@asswo1');

      expect(result).toBe(false);
    });

  it(`should return 'true' if password contain at lest one special character`,
    () => {
      const result = checkPassword('P@asswo1');

      expect(result).toBe(true);
    });

  it(`should return 'false' is password does not contain special character`,
    () => {
      const result = checkPassword('Paasswo1');

      expect(result).toBe(false);
    });
});
