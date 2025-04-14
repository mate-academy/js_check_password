'use strict';

describe('Function checkPassword:', () => {
  const checkPassword = require('./checkPassword');

  it('should be declared', () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it('should return boolean', () => {
    expect(typeof checkPassword('Testpass#1')).toBe('boolean');
  });

  it('should return true for valid 8-character password', () => {
    expect(checkPassword('Passw#1a')).toBeTruthy();
  });

  it('should return true for valid 16-character password', () => {
    expect(checkPassword('Testpass#1Testpa')).toBeTruthy();
  });

  it('should return true for valid 12-character password', () => {
    expect(checkPassword('Testpass#1qw')).toBeTruthy();
  });

  it('should return false for 7-character password', () => {
    expect(checkPassword('Testp#1')).toBeFalsy();
  });

  it('should return false for 17-character password', () => {
    expect(checkPassword('Testpass#1Testpas')).toBeFalsy();
  });

  it('should return false for password without digit', () => {
    expect(checkPassword('TestPASSword@@')).toBeFalsy();
  });

  it('should return false for password without symbol', () => {
    expect(checkPassword('TestpassWord1')).toBeFalsy();
  });

  it('should return false for password without uppercase', () => {
    expect(checkPassword('testpass#1testpas')).toBeFalsy();
  });

  it('should return true for password with one uppercase letter', () => {
    expect(checkPassword('1234567Fs@')).toBeTruthy();
  });
});
