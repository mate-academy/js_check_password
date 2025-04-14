'use strict';

/**
 * @param {string} password
 *
 * @returns {boolean}
 */

/* eslint-disable max-len */

function checkPassword(password) {
  // eslint-disable-next-line
  const validPasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;

  /* it was specified in the description on github that "accepts only letters of the Latin alphabet Aa-Zz" */
  // const cyrillicValidation = /^((?![А-Яа-я]).)*$/;

  // eslint-disable-next-line
  if (password.match(validPasswordRegex)) {
    return true;
  }

  return false;
}

module.exports = checkPassword;
