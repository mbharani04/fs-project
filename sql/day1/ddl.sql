----- CREATING DB---
CREATE DATABASE college_db;

----- CREATING TABLE---
USE college_db;
CREATE table students(
sno  INT PRIMARY KEY AUTO_INCREMENT,
student_id VARCHAR(30) UNIQUE,
student_name VARCHAR(15),
student_age INT,
student_course VARCHAR(30)
);

----- SELECTING -----
select * FROM students;

----- CREATING AGAIN TABLE ----

CREATE TABLE employees(
empolyee_id INT PRIMARY KEY  AUTO_INCREMENT,
empolyee_name VARCHAR(30),
salary INT DEFAULT 25000
);
----- SELECTING -----
select * FROM employees;

----- depar and employee ----
CREATE TABLE dept(
dept_id INT PRIMARY KEY  AUTO_INCREMENT,
dept_name VARCHAR(30),
employee_id INT
);

----- foreign key ---------
-- Child Table
CREATE TABLE employee(
    emp_id INT PRIMARY KEY AUTO_INCREMENT,
    emp_name VARCHAR(30),
    salary INT,
    dept_id INT,
    
    FOREIGN KEY (dept_id) REFERENCES dept(dept_id)
);

----- rename table -----------
ALTER TABLE students RENAME TO college_students;
----- rename column-----------
ALTER TABLE college_students RENAME COLUMN student_name to name;
----- SELECTING -----
select * FROM college_students;

----- changing datatype ------
CREATE TABLE userlist(
user_id INT PRIMARY KEY  AUTO_INCREMENT,
user_mobile VARCHAR(30),
password_char INT
);

ALTER TABLE userlist MODIFY user_mobile INT;

----- ADD NEW COLUMN -----
ALTER TABLE userlist ADD email VARCHAR(20);

----- remove column ------
ALTER TABLE userlist DROP COLUMN email;


ALTER TABLE userlist
MODIFY user_id INT;

----- remove primary key -------
ALTER TABLE userlist DROP PRIMARY KEY;

----- truncate ----]
TRUNCATE TABLE employees;
desc employees;

