'use strict';

/**
 * Checks if a password is valid.
 * Rules:
 * - Only Latin letters (A-Z, a-z)
 * - Length 8–16 inclusive
 * - At least 1 digit
 * - At least 1 uppercase letter
 * - At least 1 special character (non-alphanumeric)
 *
 * @param {string} password
 * @returns {boolean}
 */
function checkPassword(password) {
  if (typeof password !== 'string') return false;

  // Length check
  if (password.length < 8 || password.length > 16) return false;

  // Only allowed characters: Latin letters, digits, and common special chars
  const allowedChars = /^[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]+$/;
  if (!allowedChars.test(password)) return false;

  // At least one digit
  if (!/\d/.test(password)) return false;

  // At least one uppercase
  if (!/[A-Z]/.test(password)) return false;

  // At least one special character (non-letter, non-digit)
  if (!/[^A-Za-z0-9]/.test(password)) return false;

  return true;
}

module.exports = checkPassword;
