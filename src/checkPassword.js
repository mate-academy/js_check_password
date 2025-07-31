'use strict';

/**
 * @param {string} password
 *
 * @returns {boolean}
 */
function checkPassword(password) {
  // eslint-disable-next-line
  const validPasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;
  const doHaveOtherLetters = password.match(/[a-z]/ig).length
    !== password.match(/\p{Letter}/uig).length;

  // eslint-disable-next-line
  if (password.match(validPasswordRegex) && !doHaveOtherLetters) {
    return true;
  }

  return false;
}

module.exports = checkPassword;
