"use strict";

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require("./checkPassword");

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(checkPassword("4134")).toBe(false);
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword("Password1!")).toBe(true);
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword("Password1!123456")).toBe(true);
  });

  it(`should return 'true' for the valid password with
    contains at least 1 digit, 1 special character, 1 uppercase letter`, () => {
    expect(checkPassword("P@ssw0rd!")).toBe(true);
  });

  it(`should return 'false' for password with out number`, () => {
    expect(checkPassword("P@ssword!")).toBe(false);
  });

  it(`should return 'false' for password with out uppercase letter`, () => {
    expect(checkPassword("p@ssword!1")).toBe(false);
  });

  it(`should return 'false' for password with out 1 special character`, () => {
    expect(checkPassword("Пароль123")).toBe(false);
  });
});
