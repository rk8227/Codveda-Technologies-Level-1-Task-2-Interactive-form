const form = document.getElementById("userForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Form page reload na kare

  // Input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();

  // Error fields
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const passwordError = document.getElementById("passwordError");
  const successMsg = document.getElementById("successMsg");

  // Reset error messages
  nameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  passwordError.textContent = "";
  successMsg.textContent = "";

  let isValid = true;

  // Name
  if (name === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  }

  // Email
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = "Invalid email format.";
    isValid = false;
  }

  // Phone
  const phonePattern = /^[0-9]{10}$/;
  if (phone === "") {
    phoneError.textContent = "Phone is required.";
    isValid = false;
  } else if (!phonePattern.test(phone)) {
    phoneError.textContent = "Enter 10-digit phone number.";
    isValid = false;
  }

  // Password
  if (password === "") {
    passwordError.textContent = "Password is required.";
    isValid = false;
  } else if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    isValid = false;
  }

  // Success message
  if (isValid) {
    successMsg.textContent = "Form submitted successfully!";
    form.reset(); // Clear fields
  }
});
