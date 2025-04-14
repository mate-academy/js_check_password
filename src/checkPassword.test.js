'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('G0odP@assword')).toBe('boolean');
  });

  it(`should return 'true' for the valid password`, () => {
    expect(checkPassword('G0odP@assword')).toBeTruthy();
    expect(checkPassword('!!!NewP@ass12')).toBeTruthy();
    expect(checkPassword('Dog@00@@')).toBeTruthy();
    expect(checkPassword('CaT10a0!>')).toBeTruthy();
    expect(checkPassword('#%$*)6Gj')).toBeTruthy();
  });

  it(`should return 'false' for the invalid password`, () => {
    expect(checkPassword('BadPassword')).toBeFalsy();
    expect(checkPassword('12313kjs&&&')).toBeFalsy();
    expect(checkPassword('DOGOG12321#')).toBeFalsy();
    expect(checkPassword('#%$Я*)Gj')).toBeFalsy();
  });

  it(`should throw an error if password is not a string`, () => {
    expect(() => checkPassword()).toThrow();
    expect(() => checkPassword(null)).toThrow();
    expect(() => checkPassword(false)).toThrow();
    expect(() => checkPassword(true)).toThrow();
    expect(() => checkPassword(NaN)).toThrow();
    expect(() => checkPassword(9)).toThrow();
    expect(() => checkPassword(0)).toThrow();
    expect(() => checkPassword([])).toThrow();
    expect(() => checkPassword(() => {})).toThrow();
  });
});
