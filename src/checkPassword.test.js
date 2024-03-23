'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = checkPassword('Test@1234');

    expect(typeof result).toBe('boolean');
  });

  describe(`should return 'true' for valid passwords`, () => {
    it(`with 8 symbols length and`
    + ` 1 digit, 1 special character, 1 uppercase Latin letter`, () => {
      const result = checkPassword('Abcdef1@');
  
      expect(result).toBe(true);
    });
  
    it(`with 16 symbols length and`
    + ` 1 digit, 1 special character, 1 uppercase Latin letter`, () => {
      const result = checkPassword('Abcdef1@Abcdef1@');
  
      expect(result).toBe(true);
    });

    it(`with more then 8 and less then 16 symbols length`
      + ` and 1 digit, 1 special character,`
      + ` 1 uppercase Latin letter`, () => {
      const result = checkPassword('Abcdef1@Abc');
  
      expect(result).toBe(true);
    });
  });

  describe(`should return 'false' for invalid passwords`, () => {
  it(`with empty string`, () => {
      const result = checkPassword('');
  
      expect(result).toBe(false);
    });

    it(`with too small length`, () => {
      const result = checkPassword('Abcde1@');
  
      expect(result).toBe(false);
    });

    it(`with too big length`, () => {
      const result = checkPassword('Abcdef1@Abcdef1@Abcdef1@');
  
      expect(result).toBe(false);
    });

    it(`without special character`, () => {
      const result = checkPassword('Abcdef1');
  
      expect(result).toBe(false);
    });

    it(`without digit`, () => {
      const result = checkPassword('Abcdefg@');
  
      expect(result).toBe(false);
    });

    it(`with digits only`, () => {
      const result = checkPassword('12345678');
  
      expect(result).toBe(false);
    });

    it(`with letters only`, () => {
      const result = checkPassword('Abcdefgh');
  
      expect(result).toBe(false);
    });

    it(`with non-Latin letters`, () => {
      const result = checkPassword('AbcdЖд1@');
  
      expect(result).toBe(false);
    });

  });
});
