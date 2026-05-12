CREATE DATABASE company_db;
USE company_db;


CREATE TABLE employees (
    emp_id INT PRIMARY KEY AUTO_INCREMENT,
    emp_name VARCHAR(100),
    emp_age INT,
    emp_department VARCHAR(100),
    salary DECIMAL(10,2)
);



INSERT INTO employees (emp_name, emp_age, emp_department, salary)
VALUES
(UPPER('Arun'), 22, 'Developer', 35000),
(UPPER('Bharath'), 26, 'Tester', 30000),
(UPPER('Charan'), 28, 'Developer', 45000),
(UPPER('Divya'), 24, 'HR', 28000),
(UPPER('Eswar'), 30, 'Manager', 60000),
(UPPER('Fathima'), 27, 'Developer', 50000),
(UPPER('Hari'), 29, 'Tester', 40000);



SELECT COUNT(*) AS total_employees
FROM employees;


SELECT SUM(salary) AS total_salary
FROM employees;

SELECT AVG(salary) AS average_salary
FROM employees;

SELECT MAX(salary) AS highest_salary
FROM employees;

SELECT MIN(salary) AS minimum_salary
FROM employees;

SELECT COUNT(*) AS employees_above_25
FROM employees
WHERE emp_age > 25;

SELECT SUM(salary) AS developer_total_salary
FROM employees
WHERE emp_department = 'Developer';

SELECT AVG(emp_age) AS average_age
FROM employees;

SELECT MAX(emp_age) AS maximum_age
FROM employees;

SELECT MIN(emp_age) AS minimum_age
FROM employees;