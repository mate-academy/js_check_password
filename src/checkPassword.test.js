'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {

  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    const result = checkPassword('Pass123!@');

    expect(result).to.be.true;
  });

  it('should return true for a valid password', () => {
    const result = checkPassword('Password1!');

    expect(result).to.be.true;
  });

  it('should return false for a password without uppercase letters', () => {
    const result = checkPassword('qwerty');

    expect(result).to.be.false;
  });

  it('should return false for a password without special characters', () => {
    const result = checkPassword('StrongPassword');

    expect(result).to.be.false;
  });

  it('should return false for a password without digits', () => {
    const result = checkPassword('Str@ng');

    expect(result).to.be.false;
  });

  it('should return false for a short password', () => {
    const result = checkPassword('Pwd1!');

    expect(result).to.be.false;
  });

  it('should return false for a long password', () => {
    const result = checkPassword('VeryLongPassword123!@#$%^');

    expect(result).to.be.false;
  });

  it('should return false for a password with invalid characters', () => {
    const result = checkPassword('Invalid*Password1');

    expect(result).to.be.false;
  });

});
