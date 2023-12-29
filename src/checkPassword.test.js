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

  it(`should return false for the password with 7 characters`, () => {
    const result = checkPassword('Pass2!@');

    expect(result).to.be.false;
  });

  it(`should return false for the password with 17 characters`, () => {
    const result = checkPassword('Password123ijhda!');

    expect(result).to.be.false;
  });
  it(`should return true for the password with 16 characters including at least 1 digit, 1 special character, 1 uppercase letter. `, () => {
    const result = checkPassword('Passwordwertdc!1');

    expect(result).to.be.false;
  });

  it('should return true for a valid password', () => {
    const result = checkPassword('Password1!');

    expect(result).to.be.true;
  });

  it('should return false for a password without special characters', () => {
    const result = checkPassword('StrongPassword');

    expect(result).to.be.false;
  });

  it('should return false for a password without digits', () => {
    const result = checkPassword('Str@ng');

    expect(result).to.be.false;
  });

  it('should return false for a password with 7 characters', () => {
    const result = checkPassword('Pwd1hj!');

    expect(result).to.be.false;
  });

  it('should return false for a password with 17 characters', () => {
    const result = checkPassword('VeryLongPassword1');

    expect(result).to.be.false;
  });

  it('should return false for a password with invalid characters', () => {
    const result = checkPassword('Invalid*Password1');

    expect(result).to.be.false;
  });

});
