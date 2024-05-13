'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');
  const passwords = [
    'Pas1!',
    'Passw1!',
    'Passwo1!',
    'Password123!',
    'Password123456!',
    'Password1234567!',
    'Password12345678!',
    'Password123',
    'password123!',
    'PASSWORD123!',
    'Passwordddd!',
    'Пароль123!',
  ];

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = checkPassword('somePassword');

    expect(typeof result).toBe('boolean');
  });

  it(`should return false for password with
  length is less than 8`, () => {
    const invalidPassword = checkPassword(passwords[0]);

    expect(invalidPassword).toBe(false);
  });

  it(`should return false for password with
  length is on border (7)`, () => {
    const invalidPassword = checkPassword(passwords[1]);

    expect(invalidPassword).toBe(false);
  });

  it(`should return true for the valid input with
  password length on border (8)`, () => {
    const invalidPassword = checkPassword(passwords[2]);

    expect(invalidPassword).toBe(true);
  });

  it(`should return true for the valid input with
  password length between borders (12)`, () => {
    const invalidPassword = checkPassword(passwords[3]);

    expect(invalidPassword).toBe(true);
  });

  it(`should return true for the valid input with
  password length is before border (15)`, () => {
    const invalidPassword = checkPassword(passwords[4]);

    expect(invalidPassword).toBe(true);
  });

  it(`should return true for the valid input with
  password length is on border (16)`, () => {
    const invalidPassword = checkPassword(passwords[5]);

    expect(invalidPassword).toBe(true);
  });

  it(`should return false for password with
  length is more than border (17)`, () => {
    const invalidPassword = checkPassword(passwords[6]);

    expect(invalidPassword).toBe(false);
  });

  it(`should return false for password
   without special symbol`, () => {
    const invalidPassword = checkPassword(passwords[7]);

    expect(invalidPassword).toBe(false);
  });

  it(`should return false password
  without capital letters`, () => {
    const invalidPassword = checkPassword(passwords[8]);

    expect(invalidPassword).toBe(false);
  });

  it(`should return false for password
  without numbers`, () => {
    const invalidPassword = checkPassword(passwords[10]);

    expect(invalidPassword).toBe(false);
  });

  // Problems with documentation

  // it(`should return true for the valid input
  // password without lowercase letters`, () => {
  //   const invalidPassword
  //   = checkPassword(passwords[9]);

  //   expect(invalidPassword).toBe(true);
  // });

  it(`should return false for input
  password with cyrillic symbols `, () => {
    const invalidPassword
    = checkPassword(passwords[11]);

    expect(invalidPassword).toBe(false);
  });
});
