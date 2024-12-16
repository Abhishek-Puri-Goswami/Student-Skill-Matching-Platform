document.getElementById('profile-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const skills = document.getElementById('skills').value;
    const interests = document.getElementById('interests').value;
    const availability = document.getElementById('availability').value;
    if (skills && interests && availability) {
      alert('Profile saved successfully!');
    } else {
      alert('Please fill in all fields.');
    }
  });
  