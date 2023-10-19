"use strict";

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require("./checkPassword");

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = checkPassword("Password1!");
    expect(typeof result).toBe("boolean");
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    const validPassword = "Password1!";
    const result = checkPassword(validPassword);
    expect(result).toBe(true);
  });

  it(`should return 'false' for password without uppercase letter`, () => {
    const invalidPassword = "password1!";
    const result = checkPassword(invalidPassword);
    expect(result).toBe(false);
  });

  it(`should return 'false' for password without special character`, () => {
    const invalidPassword = "Password123";
    const result = checkPassword(invalidPassword);
    expect(result).toBe(false);
  });

  it(`should return 'false' for password without a digit`, () => {
    const invalidPassword = "Password!";
    const result = checkPassword(invalidPassword);
    expect(result).toBe(false);
  });

  it(`should return 'false' for too short password`, () => {
    const invalidPassword = "P@w1!";
    const result = checkPassword(invalidPassword);
    expect(result).toBe(false);
  });

  it(`should return 'false' for too long password`, () => {
    const invalidPassword = "P@ssw0rd1234567890!";
    const result = checkPassword(invalidPassword);
    expect(result).toBe(false);
  });

  it(`should return 'false' for password with cyrillic characters`, () => {
    const invalidPassword = "P@ssw0rdПароль!";
    const result = checkPassword(invalidPassword);
    expect(result).toBe(false);
  });
});
