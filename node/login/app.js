// Initialize Firebase
var firebaseConfig = {
    // Add your Firebase project configuration here
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Get references to form and input fields
  var loginForm = document.getElementById('loginForm');
  var emailInput = document.getElementById('emailInput');
  var passwordInput = document.getElementById('passwordInput');
  var errorText = document.getElementById('errorText');
  
  // Add event listener to the login form
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
  
    var email = emailInput.value;
    var password = passwordInput.value;
  
    // Sign in with Firebase authentication
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function(userCredential) {
        // Success: Redirect to dashboard or perform other actions
        console.log('Logged in successfully');
      })
      .catch(function(error) {
        // Error handling
        var errorMessage = error.message;
        errorText.textContent = errorMessage;
        console.error(errorMessage);
      });
  });
  