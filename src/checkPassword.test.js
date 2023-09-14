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

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Password1!')).toBeTruthy();
  });

  it(`should return 'false' for the invalid password
  with cyrrilic chars`, () => {
    expect(checkPassword('Пасворд1!')).toBeFalsy();
  });

  it(`should return 'false' for 
  the invalid password with less then 8 characters`, () => {
    expect(checkPassword('Qwert!1')).toBeFalsy();
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
   with 16+ chars`, () => {
    expect(checkPassword('Qwerty!12345678901')).toBeFalsy();
  });
});
