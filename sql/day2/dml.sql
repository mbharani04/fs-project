
CREATE DATABASE assignment;
USE assignment;

CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    emp_name VARCHAR(50) NOT NULL,
    emp_email VARCHAR(100) UNIQUE,
    emp_dept VARCHAR(50),
    salary INT
);

drop table employees;
-- inserting val;ues ---
INSERT INTO employees (emp_name, emp_email, emp_dept, salary)
VALUES ('Arun', 'arun@gmail.com', 'Developer', 45000);

-- inserting multi values in single query-- 
INSERT INTO employees (emp_name, emp_email, emp_dept, salary)
VALUES ('Bharath', 'bharath@gmail.com', 'Testing', 30000),
('Divya', 'divya@gmail.com', 'HR', 40000),
('Kiran', 'kiran@gmail.com', 'Developer', 55000),
('Meena', 'meena@gmail.com', 'Testing', 28000),
('Rahul', 'rahul@gmail.com', 'Developer', 60000);

SELECT * FROM employees;

UPDATE employees
SET salary = 50000
WHERE id = 3;


UPDATE employees
SET emp_dept = 'QA'
WHERE id = 5;


SET SQL_SAFE_UPDATES = 0;

UPDATE employees
SET salary = salary + 5000
WHERE emp_dept = 'Developer';

UPDATE employees
SET emp_dept = 'Manager',
salary = 75000 WHERE id = 2;

DELETE FROM employees
WHERE id = 5;


DELETE FROM employees
WHERE salary < 30000;

CREATE TABLE college (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    student_name VARCHAR(50),
    course VARCHAR(50),
    marks INT
);

INSERT INTO college (student_name, course, marks)
VALUES
('Ajay', 'BCA', 80),
('Priya', 'BSc', 85),
('Ravi', 'BCom', 75),
('Neha', 'BTech', 90);

CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50),
    login_status VARCHAR(20)
);

INSERT INTO users (username, login_status)
VALUES
('Arun', 'Inactive'),
('Divya', 'Inactive'),
('Rahul', 'Active');

UPDATE users
SET login_status = 'Active'
WHERE login_status = 'Inactive';


UPDATE users
SET login_status = 'Active'
WHERE login_status = 'Inactive';

SELECT * FROM users;


SELECT DATABASE();


