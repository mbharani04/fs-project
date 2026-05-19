-- Create Database
create database company_college_db;

-- Use Database
use company_college_db;

---------------------------------------------------
-- TASK 1
-- Create students and courses tables
---------------------------------------------------

create table courses (
    course_id int primary key auto_increment,
    course_name varchar(50)
);

create table students (
    student_id int primary key auto_increment,
    student_name varchar(50),
    course_id int,
    foreign key (course_id) references courses(course_id)
);

-- Insert courses
insert into courses(course_name) values
('Java'),
('Python'),
('React'),
('SQL');

-- Insert students
insert into students(student_name, course_id) values
('Bharani', 1),
('Priya', 2),
('Kavin', null),
('Divya', 3),
('Arun', null);

---------------------------------------------------
-- INNER JOIN
-- Show student name and course name
---------------------------------------------------

select 
students.student_name,
courses.course_name
from students
inner join courses
on students.course_id = courses.course_id;

---------------------------------------------------
-- TASK 2
-- LEFT JOIN
-- Show all students with their course names
---------------------------------------------------

select
students.student_name,
courses.course_name
from students
left join courses
on students.course_id = courses.course_id;

---------------------------------------------------
-- TASK 3
-- RIGHT JOIN
-- Show all courses with matching students
---------------------------------------------------

select
students.student_name,
courses.course_name
from students
right join courses
on students.course_id = courses.course_id;

---------------------------------------------------
-- TASK 4
-- Create employees and departments tables
---------------------------------------------------

create table departments (
    department_id int primary key auto_increment,
    department_name varchar(50)
);

create table employees (
    employee_id int primary key auto_increment,
    employee_name varchar(50),
    department_id int,
    foreign key (department_id) references departments(department_id)
);

-- Insert departments
insert into departments(department_name) values
('HR'),
('Developer'),
('Testing'),
('Admin');

-- Insert employees
insert into employees(employee_name, department_id) values
('Rahul', 1),
('Sneha', 2),
('Vikram', null),
('Meena', 3),
('Ajith', null);

---------------------------------------------------
-- INNER JOIN
-- Show employee name and department name
---------------------------------------------------

select
employees.employee_name,
departments.department_name
from employees
inner join departments
on employees.department_id = departments.department_id;

---------------------------------------------------
-- TASK 5
-- LEFT JOIN
-- Show employees without department
-- Replace NULL with 'No Department'
---------------------------------------------------

select
employees.employee_name,
ifnull(departments.department_name, 'No Department') 
as department_name
from employees
left join departments
on employees.department_id = departments.department_id;