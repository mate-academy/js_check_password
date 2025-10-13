'use strict';

/**
 * @param {string} password
 *
 * @returns {boolean}
 */
function checkPassword(password) {
  // regex sprawdzający:
  // - co najmniej 1 wielką literę
  // - co najmniej 1 cyfrę
  // - co najmniej 1 znak specjalny
  // - brak spacji
  // - długość 8-16
  const validPasswordRegex =
    /^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;

  // regex sprawdzający tylko znaki ASCII
  const asciiValidation = /^[\x20-\x7E]*$/;

  if (password.match(validPasswordRegex) && password.match(asciiValidation)) {
    return true;
  }

  return false;
}

module.exports = checkPassword;

