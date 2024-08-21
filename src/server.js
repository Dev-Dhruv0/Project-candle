// Require all necessary libraries or modules
const express = require("express");
const app = express();
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const authenticateToken = require("./Utils/Middlewares/authMiddleware");
require('dotenv').config();

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// MySQL Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "db_ecom",
  password: "MySQLServer@123",
  port: "3306",
});

// Connection error or establishment message
db.connect((err) => {
  if (err) {
    console.error("Database Connection Error", err);
    return;
  }
  console.log("Connected To MySQL Database");
});



//~~~~~~~~~~~~~~~~~~~~~~~~ API Endpoint for Signup  ~~~~~~~~~~~~~~~~~~~~~~~~
app.post("/signup", (req, res) => {
  const { firstName, lastName, email, contact, password } = req.body;

  // Log the received data
  console.log("Received Data: ", req.body); 


  // Check if the email already exists 
  const checkEmailsql = 'SELECT *FROM tbl_users WHERE email = ?';

  db.query(checkEmailsql, [email], (err, results) => {
    if (err) {
      console.error("Error checking email ",err);
      return res.status(500).json({error: "An Error occurred  while checking email!"});
    }

    if (results.length > 0) {

      // Email already exists 
      return res.status(400).json({error: "Email Already exists!"});
    }
  });


  // Hash the password
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.log("Error hashing password", err);
      return res.status(500).json({ error: "An error occurred while processing password!" });
    }

    // Putting INSERT Query in variable 
    const sql = "INSERT INTO tbl_users (firstName, lastName, email, contact, password) VALUES(?,?,?,?,?)";

    // Insert data into MySQL
    db.query(sql, [firstName, lastName, email, contact, hashedPassword], (err, result) => {
      if (err) {
        console.error("Error inserting data", err);
        return res.status(500).json({ error: "An error occurred while saving data!" });
      }
      console.log(result);
      return res.status(201).json({ message: "User Registered Successfully", user_id: result.insertId });
    });
  });
});



// API Endpoint to display signup data
app.get("/signup-data", (req, res) => {
  const sql = 'SELECT *FROM tbl_users';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});



//~~~~~~~~~~~~~~~~~~~~~~~~ API Endpoint for Login  ~~~~~~~~~~~~~~~~~~~~~~~~
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Console Received Data
  console.log('Received Data', req.body);


  // Fetch user from MYSQL
  const sql = 'SELECT * FROM tbl_users WHERE email = ?';
  db.query(sql, [email], (err, results) => {
    if (err) {
      // Console error 
      console.error('Error querying data', err);
      return res.status(500).json({ error: 'An error occurred while fetching user data!' });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const user = results[0];
    console.log('Fetched User: ', user); //Log Fetched User data

    // Compare hashed password 
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {

        // Console error
        console.error('Error comparing passwords', err);

        // Return statement
        return res.status(500).json({ error: 'An error occurred while verifying password!' });
      }

      if (!isMatch) {
        // Return Statement
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      // Passwords match, generate JWT
      const token = jwt.sign({ userId: user.id, email: user.email}, process.env.JWT_SECRET, { expiresIn: '1h' });

      res.status(200).json({ message: 'Login successful', token, user_id: user.id });
    });
  });
});

// Singup GET Request
app.get("/signup", (req, res) => {
  res.json({ message: "GET Request to /signup" });
  console.log("Received Data: ", req.body);
});

// Protected Route
app.get("/protected", authenticateToken, (req, res) => {
  res.json({ message: 'Protected data', user: req.user });
});


//Initializing Server Port
app.listen(2004, () => {
  console.log("Server is running on port 2004");
});
