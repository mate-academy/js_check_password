'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof checkPassword('123')).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Password1!')).toBe(true);
  });

  it(`should return 'false' for the password with > 16 characters`, () => {
    expect(checkPassword('54678cHsdgj@kfgkH!vjmxc')).toBe(false);
  });

  it(`should'nt accepts russian characters`, () => {
    expect(checkPassword('745hdhhdbрыБаМеч!@fkc')).toBe(false);
  });

  it(`should return 'false' for week passwords`, () => {
    expect(checkPassword('qwerty')).toBe(false);
  });

  it(`should return 'false' for short password's`, () => {
    expect(checkPassword('Str@ng')).toBe(false);
  });
  // write more tests here
});
