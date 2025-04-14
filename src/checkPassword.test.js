"use strict";

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require("./checkPassword");

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = checkPassword("12");

    expect(typeof result).toBe("boolean");
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    const result = checkPassword("yu!12323ASA");

    // write more tests here
    expect(result).toBe(true);
  });

  // eslint-disable-next-line
  it(`should return 'false' for the password with less than 8 characters`, () => {
    const result = checkPassword("!3AA");

    // write more tests here
    expect(result).toBe(false);
  });

  // eslint-disable-next-line
  it(`should return 'false' for the password with more than 16 characters`, () => {
    const result = checkPassword("!3AA234reodjqwdqwkdqwdoqkwpdoqwjdqw");

    // write more tests here
    expect(result).toBe(false);
  });

  it(`should return 'false' for the not Latin alphabet`, () => {
    const result = checkPassword("привіт!345678");

    // write more tests here
    expect(result).toBe(false);
  });
});
