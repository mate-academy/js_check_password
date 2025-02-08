'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('Password1!')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {

  });

  it(`should return true for valid password`, () => {
    expect(checkPassword('P@ssword1')).toBeTruthy();
  });

  it(`should contain at least one number`, () => {
    expect(checkPassword('P@ssword')).toBeFalsy();
  });

  it(`should not accept\`Aa-Яя\` letters`, () => {
    expect(checkPassword('ЯP@ssword1я')).toBeFalsy();
  });

  it(`should be at least 8 chars long`, () => {
    expect(checkPassword('P@ss123')).toBeFalsy();
  });

  it(`should not be more than 16 chars long`, () => {
    expect(checkPassword('P@ss1234567891011')).toBeFalsy();
  });

  it(`should accept 16 chars length`, () => {
    expect(checkPassword('P@ss123456789101')).toBeTruthy();
  });

  it(`should not accept spaces`, () => {
    expect(checkPassword('P@ss12ssd f')).toBeFalsy();
  });

  it(`should contain at least 1 digit`, () => {
    expect(checkPassword('P@ssssdf')).toBeFalsy();
  });

  it(`should contain at least 1 special character`, () => {
    expect(checkPassword('Pssssdf1')).toBeFalsy();
  });

  it(`should contain at least 1 uppercase letter`, () => {
    expect(checkPassword('p@ssssdf1')).toBeFalsy();
  });
});
