'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword)
      .toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('Testpass#1'))
      .toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Passw#1a'))
      .toBeTruthy();
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('Testpass#1Testpa'))
      .toBeTruthy();
  });

  it(`should return 'true' for the valid password with 12 characters`, () => {
    expect(checkPassword('Testpass#1qw'))
      .toBeTruthy();
  });

  it(`should return 'false' for the valid password with 7 characters`, () => {
    expect(checkPassword('Testp#1'))
      .toBeFalsy();
  });

  it(`should return 'false' for the valid password with 17 characters`, () => {
    expect(checkPassword('Testpass#1Testpas'))
      .toBeFalsy();
  });

  it(`should return 'false' for the valid input and lenght password, 
    but without at least one digit`, () => {
    expect(checkPassword('TestPASSword@@'))
      .toBeFalsy();
  });

  it(`should return 'false' for the valid input and lenght password, 
    but without at least one symbol`, () => {
    expect(checkPassword('TestpassWord1'))
      .toBeFalsy();
  });

  it(`should return 'false' for the valid input and lenght password, 
    but without at least one upper-case character`, () => {
    expect(checkPassword('testpass#1testpas'))
      .toBeFalsy();
  });

  it(`should return 'true' for the valid input and lenght password 
    and only one upper-case latin character`, () => {
    expect(checkPassword('1234567Fs@'))
      .toBeTruthy();
  });

  it(`should return 'false' for the input and lenght password,
    but with at least one cyrillic character`, () => {
    expect(checkPassword('TestПароль!!37'))
      .toBeFalsy();
  });
});
