
const createLogin = (correctPassword) => {
  let failedAttempts = 0;
  let isLocked = false;

  const login = (passwordAttempt) => {
    if (isLocked) {
      return "Account is locked. Access denied.";
    }

    if (passwordAttempt === correctPassword) {
      return "Login successful!";
    }

    failedAttempts++;

    if (failedAttempts >= 3) {
      isLocked = true;
      return "Account locked after 3 failed attempts.";
    }

    return `Incorrect password. ${
      3 - failedAttempts
    } attempts remaining.`;
  };

  return login;
};

// Create a login function
const userLogin = createLogin("shop123");

// Test the login function
console.log(userLogin("wrong1"));
console.log(userLogin("wrong2"));
console.log(userLogin("wrong3"));
console.log(userLogin("shop123"));



module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};