'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('111dsf')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('P@sswo0d')).toBe(true);
  });

  it(`should return 'false' for the invalid password with 8 characters`, () => {
    expect(checkPassword('P@sswжжd')).toBe(false);
  });

  it(`should return 'false' for password less 
  than 8 characters: 'q@1erty'`, () => {
    expect(checkPassword('q@1erty')).toBe(false);
  });

  it(`should return 'false' for the invalid password with 
  more than 16 characters: 'VerySrt@ngpassw1'`, () => {
    expect(checkPassword('VerySrt@ngpassw1')).toBe(true);
  });

  it(`should return 'false' for the invalid password with 
  3 characters: '%7g'`, () => {
    expect(checkPassword('%7g')).toBe(false);
  });
});
