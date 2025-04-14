'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = checkPassword('Password1!');

    expect(typeof result).toBe('boolean');
  });

  it(`should return "false" for input with
   empty braces`, () => {
    const res = checkPassword('');

    expect(res).toBeFalsy();
  });

  it(`should return "false" for input with
   empty spaces in braces`, () => {
    expect(checkPassword(' Passwo1!')).toBeFalsy();
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Passwo1!')).toBeTruthy();
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('Password1!passwo')).toBeTruthy();
  });

  it(`should return 'false' for 
  the invalid password with less then 8 characters`, () => {
    expect(checkPassword('Qwert!1')).toBeFalsy();
  });

  it(`should return 'false' for 
  the invalid password with 17 characters`, () => {
    expect(checkPassword('Password1!passwor')).toBeFalsy();
  });

  it(`should return 'false' for the invalid password
  with cyrrilic chars`, () => {
    expect(checkPassword('Пасворд1!')).toBeFalsy();
  });

  it(`should return 'false' for the invalid 
  password without digit chars`, () => {
    expect(checkPassword('Str@ng')).toBeFalsy();
  });

  it(`should return 'false' for the invalid password
   with lower case chars`, () => {
    expect(checkPassword('qwert!1')).toBeFalsy();
  });

  it(`should return 'false' for the invalid password
   without special char`, () => {
    expect(checkPassword('Qwerty11')).toBeFalsy();
  });
});
