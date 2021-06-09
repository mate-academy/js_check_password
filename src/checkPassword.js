'use strict';

/**
 * @param {string} password
 *
 * @returns {boolean}
 */
function checkPassword(password) {
  // eslint-disable-next-line max-len
  const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;

  if (password.match(validPassword)) {
    return true;
  }

  return false;
}

module.exports = checkPassword;
