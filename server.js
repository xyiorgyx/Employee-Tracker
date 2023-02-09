const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
const cTable = require('console.table');
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


db.query('SELECT * FROM department', function (err, results) {
  console.table(results);
});

db.query('SELECT * FROM role', function (err, results) {
  console.table(results);
});

db.query('SELECT * FROM employee', function (err, results) {
  console.table(results);
});

function addEmployee (employee){
const sql = `INSERT INTO employee SET ?`
  const employee = {
      first_name: "",
      last_name: ""
    }
  
  db.query(sql, employee, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: body
    });
  });
}

db.query(`DELETE FROM employee WHERE id = ?`, 3, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});

db.query('SELECT * FROM course_names', function (err, results) {
  console.log(results);
});



app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
