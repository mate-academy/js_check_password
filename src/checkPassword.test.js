/* eslint-disable max-len */
/* eslint-disable quotes */
"use strict";

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require("./checkPassword");

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword("Password1!")).toBe("boolean");
  });

  it(`valid pass with 8 < chars < 16`, () => {
    expect(checkPassword("Pass1ord!")).toBe(true);
  });

  it(`invalid pass with less than 8 chars`, () => {
    expect(checkPassword("Pass!1")).toBe(false);
  });

  it(`invalid pass with more than 16 chars`, () => {
    expect(checkPassword("Pas!1wordworld@@sad")).toBe(false);
  });

  it(`invalid pass without uppercase letter`, () => {
    expect(checkPassword("password@34")).toBe(false);
  });

  it(`invalid pass without special character`, () => {
    expect(checkPassword("Password34")).toBe(false);
  });

  it(`invalid pass without digit`, () => {
    expect(checkPassword("P@$$word")).toBe(false);
  });

  it(`invalid pass with cyrillic letters`, () => {
    expect(checkPassword("СуперСекюр!%%23")).toBe(false);
  });

  it(`invalid pass without digit and length less than 8 chars`, () => {
    expect(checkPassword("Str@ng")).toBe(false);
  });

  it(`invalid pass without digit, spec character, uppercase letter and length less than 8 chars`, () => {
    expect(checkPassword("qwerty")).toBe(false);
  });
});
