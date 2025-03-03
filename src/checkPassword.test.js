'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {

  });

  it(`should return 'true' for the valid password with 8 characters`, () => {

  });

  // write more tests here

  it(`should return 'true' for the password with 16 characters`, () => {
    expect(checkPassword('Lorem&1ipsum_gen')).toBeTruthy();
  });

  it(`should return 'false' for the password with 7 characters`, () => {
    expect(checkPassword('Lorem&1')).toBeFalsy();
  });

  it(`should return 'false' for the password with 17 characters`, () => {
    expect(checkPassword('Lorem&1ipsum_gene')).toBeFalsy();
  });

  it(`should return 'true' for the password
  starting with lowercase letter`, () => {
    expect(checkPassword('lorem&1IpSUM')).toBeTruthy();
  });

  it(`should return 'false' for the empty string`, () => {
    expect(checkPassword('')).toBeFalsy();
  });

  it(`should return 'false' for the password without uppercase letters`, () => {
    expect(checkPassword('lorem&10')).toBeFalsy();
  });

  it(`should return 'false' for the password without digits`, () => {
    expect(checkPassword('Lorem&ips')).toBeFalsy();
  });

  it(`should return 'false' for the password without special symbols`, () => {
    expect(checkPassword('Lorem0ips')).toBeFalsy();
  });

  it(`should return 'false' for the password with non-printing chars`, () => {
    expect(checkPassword('Lorem 1_ips')).toBeFalsy();
  });

  it(`should return 'false' for the password with non-Latin chars`, () => {
    expect(checkPassword('Loрем1_ips')).toBeFalsy();
  });
});
