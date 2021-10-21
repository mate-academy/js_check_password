'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('qweQwe1@')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('qweQwe1@')).toBeTruthy();
  });

  it(`should return 'false' for the unvalid password with 7 characters`, () => {
    expect(checkPassword('qwAwe1@')).toBeFalsy();
  });

  it(`should return 'false' for the unvalid password 
  with 17 characters`, () => {
    expect(checkPassword('qwAasdasdasdasdasdwe1@')).toBeFalsy();
  });

  it(`should return 'false' for the unvalid password 
  without 1 special characters`, () => {
    expect(checkPassword('qwAasdasdae1')).toBeFalsy();
  });

  it(`should return 'false' for the unvalid password 
  without 1 uppercase letter`, () => {
    expect(checkPassword('qasdasdae1@')).toBeFalsy();
  });

  it(`should return 'false' for the unvalid password without 1 digit`, () => {
    expect(checkPassword('qasdasdaeA@')).toBeFalsy();
  });
});
