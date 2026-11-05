
function createLoginTracker(userInfo) {
  // Step 1: Track failed login attempts
  let failedAttempts = 0;

  // Step 2: Track whether the account is locked
  let isLocked = false;

  // Step 3: Create an inner arrow function
  const login = (password) => {

    // Step 4: Check if the account is locked
    if (isLocked) {
      return 'Account locked due to too many failed login attempts';
    }

    // Step 5: Check if the password is correct
    if (password === userInfo.password) {
      return 'Login successful';
    }

    // Step 6: Increase failed attempts
    failedAttempts++;

    // Step 7: Lock after the third failed attempt has been recorded
    if (failedAttempts > 3) {
      isLocked = true;
      return 'Account locked due to too many failed login attempts';
    }

    // Step 8: Return the failed attempt message
    return `Attempt ${failedAttempts}: Login failed`;
  };

  // Step 9: Return the inner function
  return login;
}

module.exports = { createLoginTracker };
