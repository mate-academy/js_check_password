"use strict";

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require("./checkPassword");

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const isPasswordValid = checkPassword("P@ssword1");

    expect(typeof isPasswordValid).toBe("boolean");
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    const isPasswordValid = checkPassword("P@ssword1");

    expect(isPasswordValid).toBe(true);
  });

  it(`should return 'false' for the invalid password with 4 characters`, () => {
    const isPasswordValid = checkPassword("P@d1");

    expect(isPasswordValid).toBe(false);
  });

  it(`should return 'false' if password.length > 16`, () => {
    const isPasswordValid = checkPassword("P@ssword1111111111111111111111111");

    expect(isPasswordValid).toBe(false);
  });

  it(`should be case sensitive`, () => {
    const isPasswordValid = checkPassword("p@ssword1");

    expect(isPasswordValid).toBe(false);
  });

  it(`should have at least 1 special character`, () => {
    const isPasswordValid = checkPassword("Password1");

    expect(isPasswordValid).toBe(false);
  });

  it(`should have at least 1 digit`, () => {
    const isPasswordValid = checkPassword("P@ssword");

    expect(isPasswordValid).toBe(false);
  });
});
