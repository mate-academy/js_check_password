'use strict';

describe('Function checkPassword:', () => {
  const checkPassword = require('./checkPassword');

  it('Should be declared', () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it('Should return boolean', () => {
    const result = checkPassword('JakiesHaslo1!');
    expect(typeof result).toBe('boolean');
  });

  // --- Pozytywne przypadki (Valid) ---
  it("Should return 'true' for the valid password with 8 characters", () => {
    const result = checkPassword('Password1!');
    expect(result).toBe(true);
  });

  it("Should return 'true' for the valid password with 16 characters", () => {
    const result = checkPassword('SuperHaslo2026!#'); // 16 znaków
    expect(result).toBe(true);
  });

  // --- Testy długości (Invalid length) ---
  it("Should return 'false' for the invalid password with 7 characters", () => {
    const result = checkPassword('Paord1!');
    expect(result).toBe(false);
  });

  it("Should return 'false' for the invalid password with 17 characters", () => {
    const result = checkPassword('SuperHaslo2026!!#'); // 17 znaków
    expect(result).toBe(false);
  });

  // --- Testy zasad / składowych (Invalid conditions) ---
  it("Should return 'false' for the invalid password with non-Latin characters", () => {
    const result = checkPassword('Пароль123!');
    expect(result).toBe(false);
  });

  it("Should return 'false' when password has no digit", () => {
    const result = checkPassword('Password!');
    expect(result).toBe(false);
  });

  it("Should return 'false' when password has no special character", () => {
    const result = checkPassword('Password12');
    expect(result).toBe(false);
  });

  it("Should return 'false' when password has no uppercase letter", () => {
    const result = checkPassword('password1!');
    expect(result).toBe(false);
  });
});
