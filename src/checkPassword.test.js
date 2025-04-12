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
    expect(checkPassword('P@ssw0rd')).toBe(true);
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('Str0ng!Passw0rd1')).toBe(true);
  });

  it(`should return 'false' for password shorter than 8 characters`, () => {
    expect(checkPassword('P@ss1')).toBe(false);
  });

  it(`should return 'false' for password longer than 16 characters`, () => {
    expect(checkPassword('P@ssword1234567890')).toBe(false);
  });

  it(`should return 'false' if password does not contain digit`, () => {
    expect(checkPassword('Password!')).toBe(false);
  });

  // eslint-disable-next-line max-len
  it(`should return 'false' if password does not contain special character`, () => {
    expect(checkPassword('Password1')).toBe(false);
  });

  // eslint-disable-next-line max-len
  it(`should return 'false' if password does not contain uppercase letter`, () => {
    expect(checkPassword('p@ssword1')).toBe(false);
  });

  it(`should return 'false' if password contains Cyrillic characters`, () => {
    expect(checkPassword('Пароль1!')).toBe(false);
  });

  it(`should return 'false' if password contains non-Latin letters`, () => {
    // eslint-disable-next-line max-len
    expect(checkPassword('Рassword1!')).toBe(false); // первая буква — кириллическая "Р"
  });

  it(`should return 'false' if password contains space`, () => {
    expect(checkPassword('Pass word1!')).toBe(false);
  });
});
