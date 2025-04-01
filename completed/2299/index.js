/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function(password) {
  if (password.length < 8) {
    return false;
  }

  for (let i=0; i<password.length-1; i++) {
    if (password[i] === password[i+1]) {
      return false;
    }
  }

  const specialCharArray = '!@#$%^&*()-+'.split('');

  const hasLowerCase = password.match(/[a-z]/) !== null
  const hasUpperCase = password.match(/[A-Z]/) !== null
  const hasDigits = password.match(/[0-9]/) !== null
  const hasSpecialChar = specialCharArray.some(c => password.includes(c))

  return hasLowerCase && hasUpperCase && hasDigits && hasSpecialChar;
};