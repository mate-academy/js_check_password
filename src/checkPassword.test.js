'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it('should be declared', function() {
    expect(checkPassword)
      .toBeInstanceOf(Function);
  });

  it('should return false'
    + ' if password includes unacceptable letters', function() {
    const result = checkPassword('пароль неприйнятний');

    expect(result)
      .toBeFalsy();
  });

  it('should return false if password too short', function() {
    const result = checkPassword('pasS1@');

    expect(result)
      .toBeFalsy();
  });

  it('should return false if password too long', function() {
    const result = checkPassword('passwordistoolonG1@');

    expect(result)
      .toBeFalsy();
  });

  it('should return false'
    + 'if password is not includes at least one number, special character'
    + 'and uppercase letter', function() {
    const testOne = checkPassword('Password!');
    const testTwo = checkPassword('Password1');
    const testThree = checkPassword('password1!');

    expect(testOne)
      .toBeFalsy();

    expect(testTwo)
      .toBeFalsy();

    expect(testThree)
      .toBeFalsy();
  });

  it('should return true if password is valid', function() {
    const result = checkPassword('Password1!');

    expect(result)
      .toBeTruthy();
  });
});
