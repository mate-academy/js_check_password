'use strict';

/**
 * @param {string} password
 *
 * @returns {boolean}
 */
function checkPassword(password) {
  // Regular expression to validate password rules
  const validPasswordRegex = new RegExp(
    '^(?=.*\\d)'
    + '(?=.*[a-z])'
    + '(?=.*[A-Z])'
    + '(?=.*[^a-zA-Z0-9])'
    + '\\S{8,16}$'
  );
  // Check for non-Latin characters
  const containsCyrillic = /[А-Яа-я]/.test(password);

  return validPasswordRegex.test(password) && !containsCyrillic;
}

module.exports = checkPassword;
