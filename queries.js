const inquirer = require('inquirer');

async function init() {
  await inquirer .prompt([
    {
      type: 'list',
      message: 'What can I do for you?',
      name: 'userChoice',
      choices: ['Show All Employees','Add Employee','Update Employee Role','View All Roles', 'Add Role', 'View All Departments','Add Department']
    },
  ])
  .then((response) => caseFunction(response))
  .catch((err) => console.error(err));
}
init();


switch (response){
    case 'Show All Employees':
    ViewAllEmp()
    break;
    case 'Add Employee':
    addEmployee()
    break;
    case 'Update Employee Role':
    updateEmployee()
    break;
    case 'View All Roles':
    viewAllRoles();
    break;
    case 'Add Role':
    addRoll();
    break;
    case 'View All Departments':
    viewAllDepartments();
    break;
    case 'Add Department':
    addDepartments()
    break;
    default:
    init()
}