"use strict";

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require("./checkPassword");

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = checkPassword("mhbb");
    expect(typeof result).toBe("boolean");
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    const result = checkPassword("Paword123456789!");
    expect(result).toBe(true);
  });

  it(`should return 'false' for the valid password with 17 characters`, () => {
    const result = checkPassword("Paword1234567890!");
    expect(result).toBe(false);
  });

  it(`should return 'true' for the valid password with 9 characters`, () => {
    const result = checkPassword("Pasword1!");
    expect(result).toBe(true);
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    const result = checkPassword("Paword1!");
    expect(result).toBe(true);
  });

  it(`should return 'false' for  password with 7 characters`, () => {
    const result = checkPassword("Pword1!");
    expect(result).toBe(false);
  });

  it(`should return 'false' for the invalid password without digit`, () => {
    const result = checkPassword("Password!");
    expect(result).toBe(false);
  });

  it(`should return 'false' for the invalid password without special character,`, () => {
    const result = checkPassword("Password1");
    expect(result).toBe(false);
  });

  it(`should return 'false' for the invalid password without uppercase letter,`, () => {
    const result = checkPassword("password1!");
    expect(result).toBe(false);
  });

  it(`should return 'false' for the invalid password with Cyrillic letters,`, () => {
    const result = checkPassword("Passworжъэюd1!");
    expect(result).toBe(false);
  });

  it(`should return 'false' for invalid password`, () => {
    const result = checkPassword("qwerty");
    expect(result).toBe(false);
  });

  it(`should return 'false' for invalid password`, () => {
    const result = checkPassword("Str@ng");
    expect(result).toBe(false);
  });
});
