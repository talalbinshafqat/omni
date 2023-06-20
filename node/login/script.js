document.getElementById('loginForm').addEventListener('submit', loginUser);

function loginUser(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      // Login successful, redirect to dashboard or perform other actions
      window.location.href = './OMNI/index3.html';
    } else {
      // Login failed, display error message
      alert('Invalid credentials. Please try again.');
    }
  })
  .catch(error => console.error('Error:', error));
}
