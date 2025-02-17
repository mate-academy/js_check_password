'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('testpassword')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    let result = checkPassword('Password12$')
    expect(result).toBeTruthy();
  });

  it(`should return 'false' for the password with less than 8 characters`, () => {
    let result = checkPassword('Pad12$')
    expect(result).toBeFalsy();
  });

  it(`should return 'false' for the password with more than 16 characters`, () => {
    let result = checkPassword('Testpassword44562%')
    expect(result).toBeFalsy();
  });

  it(`should return 'false' for the password with non latin characters`, () => {
    let result = checkPassword('TestparЯаd42%')
    expect(result).toBeFalsy();
  });

  it(`should return 'false' for the password without at least one digit`, () => {
    let result = checkPassword('Testpassword%')
    expect(result).toBeFalsy();
  });

  it(`should return 'false' for the password without at least one special`, () => {
    let result = checkPassword('Testpassword4')
    expect(result).toBeFalsy();
  });

  it(`should return 'false' for the password without at least one uppercase letter`, () => {
    let result = checkPassword('testpassword4#')
    expect(result).toBeFalsy();
  });
});
