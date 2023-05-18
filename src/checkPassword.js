'use strict';

/**
 * @param {string} password
 *
 * @returns {boolean}
 */
function checkPassword(password) {
  const validPasswordRegex
    = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;
  const cyrillicValidation = /^((?![А-Яа-я]).)*$/;

  if (password.match(validPasswordRegex)
    && password.match(cyrillicValidation)) {
    return true;
  }

  return false;
}

module.exports = checkPassword;
