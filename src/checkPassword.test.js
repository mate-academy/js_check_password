'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  const PASSWORD = {
    CORRECT: 'Password1!',
    NOT_CORRECT: {
      SHORT_LENGHT: 'Passd1!',
      LONG_LENGHT: 'PasswordVeryLng20124',
      INCLUDES_ANOTHER_ALPHABET: 'ДужеКласнийПароль',
      WITHOUT_DIGIT: 'Password!',
      WITHOUT_SPECIAL_CHARACTER: 'Password12',
      WITHOUT_UPPERCASE_LETTER: 'password12',
    },
  };

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword(PASSWORD.CORRECT)).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword(PASSWORD.CORRECT)).toBeTruthy();
  });

  it(`should return 'false' if`
    + ` 8 > password.length || password.length > 16`, () => {
    expect(checkPassword(PASSWORD.NOT_CORRECT.SHORT_LENGHT)).toBeFalsy();
    expect(checkPassword(PASSWORD.NOT_CORRECT.LONG_LENGHT)).toBeFalsy();
  });

  it(`should return 'false' if the password includes letters`
    + ` from another alphabet`, () => {
    expect(checkPassword(PASSWORD.NOT_CORRECT.INCLUDES_ANOTHER_ALPHABET))
      .toBeFalsy();
  });

  it(`should return 'false' if the password without digit`, () => {
    expect(checkPassword(PASSWORD.NOT_CORRECT.WITHOUT_DIGIT)).toBeFalsy();
  });

  it(`should return 'false' if the password without special character`, () => {
    expect(checkPassword(PASSWORD.NOT_CORRECT.WITHOUT_SPECIAL_CHARACTER))
      .toBeFalsy();
  });

  it(`should return 'false' if the password without uppercase letter`, () => {
    expect(checkPassword(PASSWORD.NOT_CORRECT.WITHOUT_UPPERCASE_LETTER))
      .toBeFalsy();
  });
});
