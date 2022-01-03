'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('Password1!') === 'boolean').toBeTruthy();
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Password1!')).toBe(true);
  });
<<<<<<< HEAD

  it(`should return 'true' for the password with 8 characters`, () => {
    expect(checkPassword('Passwo1!')).toBe(true);
  });

  it(`should return 'true' for the password with 16 characters`, () => {
    expect(checkPassword('Passwo1!Passwo1!')).toBe(true);
  });

  it(`should return 'false' for the password with 7 characters`, () => {
    expect(checkPassword('Passw1!')).toBe(false);
  });

  it(`should return 'false' for the password with 17 characters`, () => {
    expect(checkPassword('Passwo1!Passwo1!1')).toBe(false);
  });

=======

  it(`should return 'true' for the password with 8 characters`, () => {
    expect(checkPassword('Passwo1!')).toBe(true);
  });

  it(`should return 'true' for the password with 16 characters`, () => {
    expect(checkPassword('Passwo1!Passwo1!')).toBe(true);
  });

  it(`should return 'false' for the password with 7 characters`, () => {
    expect(checkPassword('Passw1!')).toBe(false);
  });

  it(`should return 'false' for the password with 17 characters`, () => {
    expect(checkPassword('Passwo1!Passwo1!1')).toBe(false);
  });

>>>>>>> 95c04f6e7b8c70e0fb42760dd9840007ba57eace
  it(`should return 'false' for the password with non-Latin letters`, () => {
    expect(checkPassword('Paлsword1!')).toBe(false);
  });

  it(`should return 'false' for the password without a number`, () => {
    expect(checkPassword('Password!')).toBe(false);
  });

  it(`should return 'false' for the password without a special symbol`, () => {
    expect(checkPassword('Password1')).toBe(false);
  });

  it(`should return 'false' for the password without a capital letter`, () => {
    expect(checkPassword('password!1')).toBe(false);
  });
<<<<<<< HEAD
=======


  // write more tests here
>>>>>>> 95c04f6e7b8c70e0fb42760dd9840007ba57eace
});
