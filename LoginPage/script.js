document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // Simulating login validation (you'd add real logic here)
  if (email && password) {
    alert("Login successful!");
  } else {
    alert("Please fill in both fields.");
  }
});
