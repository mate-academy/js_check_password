'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword)
      .toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('Password1!'))
      .toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Pass123!'))
      .toBe(true);
  });

  it(`should return 'true' for the valid password
   with maximum 16 characters inclusive`, () => {
    expect(checkPassword('Password1234567!'))
      .toBe(true);
  });

  it(`should return 'false' for the password without a digit`, () => {
    expect(checkPassword('Password!'))
      .toBe(false);
  });

  it(`should return 'false' for the password without
   a special character`, () => {
    expect(checkPassword('Password1'))
      .toBe(false);
  });

  it(`should return 'false' for the password
   without an uppercase letter`, () => {
    expect(checkPassword('password1!'))
      .toBe(false);
  });

  it(`should return 'false' for the password
   which has less than 8 characters`, () => {
    expect(checkPassword('Pass12!'))
      .toBe(false);
  });

  it(`should return 'false' for the password
   which has more than 16 characters`, () => {
    expect(checkPassword('Password12345678!'))
      .toBe(false);
  });

  it(`should return 'false' for the password
   with symbols not from the Latin alphabet`, () => {
    expect(checkPassword('Слава_Україні!!!1'))
      .toBe(false);
  });
});
