'use strict';

/**
 * @param {string} password
 *
 * @returns {boolean}
 */
function checkPassword(password) {
  const v = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;

  if (password.match(v)) {
    return true;
  }

  return false;
}

module.exports = checkPassword;
