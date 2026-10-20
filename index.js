
function createLoginTracker(userInfo) {
  let failedAttempts = 0;
  let isLocked = false;

  const login = (password) => {
    if (isLocked) {
      return 'Account locked due to too many failed login attempts';
    }

    if (password === userInfo.password) {
      return 'Login successful';
    }

    failedAttempts++;

    if (failedAttempts > 3) {
      isLocked = true;
      return 'Account locked due to too many failed login attempts';
    }

    return `Attempt ${failedAttempts}: Login failed`;
  };

  return login;
}

module.exports = { createLoginTracker };
