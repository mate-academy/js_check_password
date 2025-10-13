'use strict';

/**
 * @param {string} password
 *
 * @returns {boolean}
 */
function checkPassword(password) {
  if (typeof password !== 'string') return false;

  // regex sprawdzający:
  // - co najmniej 1 wielką literę
  // - co najmniej 1 cyfrę
  // - co najmniej 1 znak specjalny
  // - brak spacji
  // - długość 8-16
  const validPasswordRegex =
    /^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;

  // regex sprawdzający tylko znaki ASCII od ! do ~ (bez spacji)
  const asciiValidation = /^[\x21-\x7E]*$/;

  if (validPasswordRegex.test(password) && asciiValidation.test(password)) {
    return true;
  }

  return false;
}

module.exports = checkPassword;


