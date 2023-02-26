const express = require('express');
const inquirer = require('inquirer');
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
  console.log(`Connected to the employees_db database.`)
);
const choices =['Show All Employees','Add Employee','Update Employee Role','View All Roles', 'Add Role', 'View All Departments','Add Department']

async function init() {
  await inquirer.prompt([
    {
      type: 'list',
      message: 'What can I do for you?',
      name: 'userChoice',
      choices: choices
    },
  ])
  .then((response) => caseFunction(response))
  .catch((err) => console.error(err));
}
init();


switch (response){
    case 'Show All Employees':
      db.query('SELECT * FROM employee', function (err, results) {
        console.table(results);
      });
    break;
    case 'Add Employee':
    async function inquirerEmployee([
      
    ])
    break;
    case 'Update Employee Role':
    updateEmployee()
    break;
    case 'View All Roles':
      db.query('SELECT * FROM role', function (err, results) {
        console.table(results);
      });
    break;
    case 'Add Role':
      async function queryRole(){
        await inquirer.prompt([
          {
            type: 'input',
            message: 'What will be the name of this Role?',
            name: role_name,
          },
          {
            type: 'input',
            message: 'What will be the salary of this Role?',
            name: role_salary,
          },
          {
            type: 'input',
            message: 'Which department does this rold belong to?',
            name: department,
          },
        
        ])
        .then((response) => addRole(response))
  .catch((err) => console.error(err));
        };
    break;
    case 'View All Departments':
      db.query('SELECT * FROM department', function (err, results) {
        console.table(results);
      });
    break;
    case 'Add Department':
    async function queryDepartments(){
      await inquirer.prompt([
        {
          type: 'input',
          message: 'What will be the name of this Role?',
          name: role_name,
        },
        {
          type: 'input',
          message: 'What will be the salary of this Role?',
          name: role_salary,
        },
        {
          type: 'input',
          message: 'Which department does this rold belong to?',
          name: department,
        },
        
      ])
    }
    break;
    default:
    init()
}


function addRole(){
  const sql = `INSERT INTO role SET ?`
  role = {
      role_name: "",
      role_salary: "",
      department: "",
    }
  
  db.query(sql, role, (err, result) => {
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

function addEmployee (employee){
const sql = `INSERT INTO employee SET ?`
  employee = {
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



app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
