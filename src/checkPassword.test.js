"use strict";

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require("./checkPassword");

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const checkReturnType = typeof checkPassword("P@ssword1");

    expect(checkReturnType).toBe("boolean");
  });

  it(`should return 'true' for the valid password >= 8 characters`, () => {
    const checkValidPassword = checkPassword("P@ssword1");

    expect(checkValidPassword).toBe(true);
  });

  it(`should return 'false' for the valid password < 8 characters`, () => {
    const checkInvalidPassword = checkPassword("P@ss");

    expect(checkInvalidPassword).toBe(false);
  });

  it(`should return 'false' for the password > 16 characters`, () => {
    const checkInvalidPassword = checkPassword("P@ssswodjfkfk2312133");

    expect(checkInvalidPassword).toBe(false);
  });

  it(`should return 'false' if not only Latin letters`, () => {
    const checkInvalidPassword = checkPassword("P@sssприв132");

    expect(checkInvalidPassword).toBe(false);
  });

  it(`should return 'false' if password haven't one number`, () => {
    const checkInvalidPassword = checkPassword("myP@ssword");

    expect(checkInvalidPassword).toBe(false);
  });

  it(`should return 'false' if password haven't one upper letter`, () => {
    const checkInvalidPassword = checkPassword("my@ssword1");

    expect(checkInvalidPassword).toBe(false);
  });

  it(`should return 'false' if password haven't one symbol`, () => {
    const checkInvalidPassword = checkPassword("myPassword12");

    expect(checkInvalidPassword).toBe(false);
  });
});
