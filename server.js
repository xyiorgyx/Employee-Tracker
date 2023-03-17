const express = require('express');
const inquirer = require('inquirer');
// Import and require mysql2
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();
require ("console.table")

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'Y3400$00141b',
    database: 'employees_db'
  },
  console.log(`Connected to the courses_db database.`)
);


const choices = ['Show All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'exit']
// will ask what the user wants to do, with many choices comes additionla queries.
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
    await addEmployee()
        break;
      case 'Update Employee Role':
        await updateEmployee()
        break;
      case 'View All Roles':
       await showAllRoles()
        break;
      case 'Add Role':
        await addRole();
        break;
      case 'View All Departments':
        await showAllDepartments();
        break;
      case 'Add Department':
       await queryDepartments();
        break;
      default:
        return
    }
askFirstQuestion();
  } catch (err) {
    console.log(err)
  }
}
askFirstQuestion();

//Will show all departments within the database
async function showAllDepartments(){
  const [departments] = await db.promise().query('SELECT * FROM department'); 
    console.table(departments);
}

// Will show all roles in the database
async function showAllRoles() {
 const [roles] = await db.promise().query('SELECT * FROM role'); 
console.table(roles);
}

// Will show alll employees currently within the data base
async function showAllEmployees() {
  const [employees] = await db.promise().query('SELECT * FROM employee'); 
    console.table(employees);
}

// Will query about the role including, the name, salary and department
async function addRole() {

  const [departments] = await db.promise().query("SELECT * FROM department")
  const deptChoices = departments.map(({name, id}) => {
    return {name, value: id}
  })
  const response = await inquirer.prompt([
    {
      type: 'input',
      message: 'What will be the name of this Role?',
      name: "title",
    },
    {
      type: 'input',
      message: 'What will be the salary of this Role?',
      name: "salary",
    },
    {
      type: 'list',
      message: 'Which department does this rold belong to?',
      name: "department_id",
      choices: deptChoices
    },
  ])
// inserts information into the database 
  const sql = `INSERT INTO role SET ?`

  db.query(sql, response, (err, result) => {
    if (err) {
      console.log(err.message)
      return;
    }
  });
}

// adds the emplopyee based on the information provided.
async function addEmployee() {

  const [roles] = await db.promise().query("SELECT * FROM role")
  const roleChoices = roles.map(({title, id}) => {
    return {name: title, value: id}
  })

  const [managers] = await db.promise().query("SELECT * FROM employee")
  const managerChoices = managers.map(({first_name, last_name, id}) => {
    return {name: `${first_name} ${last_name}`, value: id}
  })
  const employee = await inquirer.prompt([
    {
      type: 'input',
      message: 'What is the first name of your employee?',
      name: "first_name",
    },
    {
      type: 'input',
      message: 'What is the employees last name?',
      name: "last_name",
    },
    {
      type: 'list',
      message: 'Which role would you like to assign this employee',
      name: "role_id",
      choices: roleChoices
    },
    {
      type: 'list',
      message: 'Which manager would you like to assign this employee',
      name: "manager_id",
      choices: managerChoices
    },
  
  ])


  const sql = `INSERT INTO employee SET ?`
 
  db.query(sql, employee, (err, result) => {
    if (err) {
      console.log(err.message)
      return;
    }
  });
}


