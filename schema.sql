DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
  id INT NOT NULL AUTO ,
  name VARCHAR(30) NOT NULL
  PRIMARY KEY (id)
 
);

CREATE TABLE role (
  id INT NOT NULL AUTO ,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT
  FOREIGN KEY (department_id)
  REFERENCES department(id)
  ON DELETE SET NULL
  


);

CREATE TABLE employee (
  id INT NOT NULL AUTO ,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id VARCHAR(30) NOT NULL,
  FOREIGN KEY (role_id)
  REFERENCES role (id)
  ON DELETE SET NULL
);

