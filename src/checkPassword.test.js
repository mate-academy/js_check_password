'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('passW0rd@')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('P@ssw0rd')).toBeTruthy();
  });

  it(`should return 'false' for the valid password with 7 characters`, () => {
    expect(checkPassword('qWert1$')).toBeFalsy();
  });

  it(`should return 'true' for the valid password with 12 characters`, () => {
    expect(checkPassword('QwertyUiop!2')).toBeTruthy();
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('qWert1$hk$%123Bk')).toBeTruthy();
  });

  it(`should return 'false' for the valid password with 17 characters`, () => {
    expect(checkPassword('qWert1$hk$%123bkM')).toBeFalsy();
  });

  it(`should return 'false' for the`
  + `10-character password without digits`, () => {
    expect(checkPassword('qWert$hkbM')).toBeFalsy();
  });

  it(`should return 'false' for the`
  + `10-character password without special characters`, () => {
    expect(checkPassword('qWert4hkbM')).toBeFalsy();
  });

  it(`should return 'false' for the`
  + `10-character password without uppercase letters`, () => {
    expect(checkPassword('qwert$hkbm')).toBeFalsy();
  });

  it(`should return 'false' for a 10-character Cyrillic password`, () => {
    expect(checkPassword('фоваЄ123Вл')).toBeFalsy();
  });
});
