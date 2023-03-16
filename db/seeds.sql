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
       ("Therapist", 65000, 3),
       ("Negotiator", 20000 ,3 ),
       ("Financial Analyst", 90000, 4),
       ("Portfolio Manager", 120000, 4 );
       

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ryan", "Reynolds", 4, null),
       ("Denzel", "Washington", 8, null ),
       ("Dwayne","Johnson", 1, 1),
       ("Jenna", "Ortega", 4, 2),
       ("Johny","Depp", 5, 4),
       ("Keanu", "Reeves", 2, 4),
       ("Ana", "De Armas",3, 3);
  