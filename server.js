const express = require('express');
const inquirer = require('inquirer');
// Import and require mysql2
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

const choices = ['Show All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department']

async function askFirstQuestion() {
  try {
    const response = await inquirer.prompt([
      {
        type: 'list',
        message: 'What can I do for you?',
        name: 'userChoice',
        choices: choices
      },
    ])

    switch (response.userChoice) {
      case 'Show All Employees':
        await showAllEmployees();
        break;
      case 'Add Employee':

        break;
      case 'Update Employee Role':
        await updateEmployee()
        break;
      case 'View All Roles':
        db.query('SELECT * FROM role', function (err, results) {
          console.table(results);
        });
        break;
      case 'Add Role':
        addRole();
        break;
      case 'View All Departments':
        db.query('SELECT * FROM department', function (err, results) {
          console.table(results);
          
        });
        break;
      case 'Add Department':
        queryDepartments();
        break;
      default:
        askFirstQuestion()
    }

  } catch (err) {
    console.log(err)
  }
}
askFirstQuestion();

async function queryDepartments() {
  await inquirer.prompt([
    {
      type: 'input',
      message: 'What will be the name of this Role?',
      name: 'role_name',
    },
    {
      type: 'input',
      message: 'What will be the salary of this Role?',
      name: 'role_salary',
    },
    {
      type: 'input',
      message: 'Which department does this role belong to?',
      name: 'department',
    },

  ])
}

function showAllEmployees() {
  db.query('SELECT * FROM employee', function (err, results) {
    console.log(results);
  });
}

async function addRole() {

  const [departments] = db.promise().query("SELECT * FROM departments")

  const response = await inquirer.prompt([
    {
      type: 'input',
      message: 'What will be the name of this Role?',
      name: "role_name",
    },
    {
      type: 'input',
      message: 'What will be the salary of this Role?',
      name: "role_salary",
    },
    {
      type: 'input',
      message: 'Which department does this rold belong to?',
      name: "department",
    },

  ])

  const sql = `INSERT INTO role SET ?`

  db.query(sql, response, (err, result) => {
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

function addEmployee(employee) {
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
