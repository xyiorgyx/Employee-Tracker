const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
   
    user: 'root',
    
    password: 'Y3400$00141b'
  },
  console.log(`Connected to the classlist_db database.`)
);


db.query('SELECT * FROM employee', function (err, results) {
  console.log(results);
});


app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
