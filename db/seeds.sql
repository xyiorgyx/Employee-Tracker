INSERT INTO department (name)
VALUES ("Sales"),
       ("Advertising"),
       ("Human Resources"),
       ("Financial Analyst Center");


INSERT INTO role (title, salary, department_id)
VALUES ("Lead sales Representative", 70000, 1),
       ("Sales Manager", 50000, 1),
       ("Sales Executive", 100000, 1),
       ("Graphic Artist", 85000, 2),
       ("Advertising Copywriter", 90000, 2),
       ("Art Director", 55000 ,2 ),
       ("Therapist", 65000, 3);
       ("Negotiator", 20000 ,3 ),
       ("Financial Analyst", 90000, 4);
       ("Portfolio Manager", 120000, 4 ),
       

  INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ryan", "Reynolds", ),
       ("Denzel", "Washington"),
       ("Dwayne","Johnson", 1, null),
       ("Jenna", "Ortega" ),
       ("Johny","Depp" ),
       ("Keanu", "Reeves", 2, 3),
       ("Ana", "De Armas");
  