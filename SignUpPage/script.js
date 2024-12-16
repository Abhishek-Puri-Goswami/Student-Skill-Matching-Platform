document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
    if (username && email && password && confirmPassword) {
      if (password === confirmPassword) {
        alert('Account Created Successfully!');
      } else {
        alert('Passwords do not match!');
      }
    } else {
      alert('Please fill in all fields.');
    }
  });
  