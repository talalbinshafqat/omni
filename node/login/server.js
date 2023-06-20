const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'login_table'
});
// Serve static files
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint for login
app.post('/', (req, res) => {
  const { username, password } = req.body;
// Route handler for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
  // Query the database for the user
  connection.query(
    'SELECT * FROM login WHERE username = talalshafqat313@gmail.com AND password = alqaimforce15.',
    [username, password],
    (error, results) => {
      if (error) {
        console.error('Error:', error);
        res.json({ success: false });
      } else if (results.length > 0) {
        // User found, login successful
        res.json({ success: true });
      } else {
        // User not found, login failed
        res.json({ success: false });
      }
    }
  );
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
