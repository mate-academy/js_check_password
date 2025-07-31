'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');
  const generatePassword = (amountOfCharacters, partWithRequiredCharacters) => {
    const different = amountOfCharacters - partWithRequiredCharacters.length;

    if (different <= 0) {
      return partWithRequiredCharacters.slice(0, amountOfCharacters);
    }

    const randomLetterASCII = (howManyTimes) => {
      let generatedLetters = '';

      for (let i = 1; i <= howManyTimes; i++) {
        const codeASCII = Math.floor(Math.random() * 26) + 97;

        generatedLetters += String.fromCharCode(codeASCII);
      }

      return generatedLetters;
    };

    const randomPart = randomLetterASCII(amountOfCharacters
      - partWithRequiredCharacters.length);
    const result = partWithRequiredCharacters + randomPart;

    return result;
  };

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const typeOfValue = typeof checkPassword('B34ji^sska');

    expect(typeOfValue).toBeTruthy();
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    const value = generatePassword(8, '1^B');

    expect(checkPassword(value)).toBe(true);
  });

  it(`should return 'true' for the valid password with 9 characters`, () => {
    const value = generatePassword(9, '1^B');

    expect(checkPassword(value)).toBe(true);
  });

  it(`should return 'true' for the valid password with 15 characters`, () => {
    const value = generatePassword(15, '1^B');

    expect(checkPassword(value)).toBe(true);
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    const value = generatePassword(16, '1^B');

    expect(checkPassword(value)).toBe(true);
  });

  it(`should return 'false' for the valid password with 7 characters`, () => {
    const value = generatePassword(7, '1^B');

    expect(checkPassword(value)).toBe(false);
  });

  it(`should return 'false' for the valid password with 17 characters`, () => {
    const value = generatePassword(17, '1^B');

    expect(checkPassword(value)).toBe(false);
  });

  it(`should return 'false' if `
      + `password doesn't contain any digit`, () => {
    const value = generatePassword(10, '^B');

    expect(checkPassword(value)).toBe(false);
  });

  it(`should return 'false' if `
      + `password doesn't contain any special character`, () => {
    const value = generatePassword(10, '1B');

    expect(checkPassword(value)).toBe(false);
  });

  it(`should return 'false' if `
      + `password doesn't contain any upperCase`, () => {
    const value = generatePassword(10, '1^');

    expect(checkPassword(value)).toBe(false);
  });

  it(`should return 'false' if `
      + `password contains non-Latin alphabet`, () => {
    const value = [
      generatePassword(10, '1^BaŁ]\\'),
      generatePassword(10, '1^Baџ]\\'),
      generatePassword(10, '1^Baó]\\'),
      generatePassword(10, '1^Baä]\\'),
    ];

    value.forEach((password, i) => {
      expect(checkPassword(password))
        .toBe(false);
    });
  });
});
