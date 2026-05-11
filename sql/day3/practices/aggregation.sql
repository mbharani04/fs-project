CREATE DATABASE company;
use company;

CREATE TABLE comemployees(
emp_id INT PRIMARY KEY AUTO_INCREMENT,
emp_name VARCHAR(30),
emp_email VARCHAR(30) UNIQUE,
emp_dept VARCHAR(40),
emp_salary INT,
city VARCHAR (30),
create_at datetime
);


INSERT INTO comemployees(emp_name, emp_email, emp_dept, emp_salary, city, create_at)
VALUES
(UPPER('Arun Kumar'), LOWER('arun@gmail.com'), 'Developer', ROUND(45.300), 'Chennai', NOW()),
(UPPER('Priya Sharma'), LOWER('priya@gmail.com'), 'HR', ROUND(35.400), 'Bangalore', NOW()),
(UPPER('Rahul Verma'), LOWER('rahul@gmail.com'), 'Tester', ROUND(45.200), 'Hyderabad', NOW()),
(UPPER('Sneha Reddy'), LOWER('sneha@gmail.com'), 'Designer', ROUND(38000), 'Mumbai', NOW()),
(UPPER('Karthik S'), LOWER('karthik@gmail.com'), 'Developer', ROUND(50000), 'Coimbatore', NOW()),
(UPPER('Divya Nair'), LOWER('divya@gmail.com'), 'Manager', ROUND(65000), 'Kochi', NOW()),
(UPPER('Vikram Singh'), LOWER('vikram@gmail.com'), 'Developer', ROUND(47000), 'Delhi', NOW()),
(UPPER('Anjali Mehta'), LOWER('anjali@gmail.com'), 'HR', ROUND(36000), 'Pune', NOW()),
(UPPER('Rohit Das'), LOWER('rohit@gmail.com'), 'Tester', ROUND(42000), 'Kolkata', NOW()),
(UPPER('Meena Ravi'), LOWER('meena@gmail.com'), 'Designer', ROUND(39000), 'Madurai', NOW()),

(UPPER('Suresh Babu'), LOWER('suresh@gmail.com'), 'Developer', ROUND(52000), 'Salem', NOW()),
(UPPER('Keerthana P'), LOWER('keerthana@gmail.com'), 'HR', ROUND(34000), 'Trichy', NOW()),
(UPPER('Ajay Kumar'), LOWER('ajay@gmail.com'), 'Tester', ROUND(41000), 'Vellore', NOW()),
(UPPER('Pooja Singh'), LOWER('pooja@gmail.com'), 'Designer', ROUND(43000), 'Jaipur', NOW()),
(UPPER('Naveen Raj'), LOWER('naveen@gmail.com'), 'Developer', ROUND(55000), 'Erode', NOW()),
(UPPER('Lavanya S'), LOWER('lavanya@gmail.com'), 'Manager', ROUND(70000), 'Chennai', NOW()),
(UPPER('Harish Kumar'), LOWER('harish@gmail.com'), 'Developer', ROUND(48000), 'Bangalore', NOW()),
(UPPER('Reshma Ali'), LOWER('reshma@gmail.com'), 'HR', ROUND(37000), 'Hyderabad', NOW()),
(UPPER('Ganesh R'), LOWER('ganesh@gmail.com'), 'Tester', ROUND(44000), 'Mumbai', NOW()),
(UPPER('Swathi M'), LOWER('swathi@gmail.com'), 'Designer', ROUND(41000), 'Pune', NOW()),

(UPPER('Dinesh K'), LOWER('dinesh@gmail.com'), 'Developer', ROUND(53.4000), 'Chennai', NOW()),
(UPPER('Aishwarya T'), LOWER('aish@gmail.com'), 'HR', ROUND(36.2000), 'Coimbatore', NOW()),
(UPPER('Manoj Patel'), LOWER('manoj@gmail.com'), 'Tester', ROUND(45000), 'Ahmedabad', NOW()),
(UPPER('Nisha Roy'), LOWER('nisha@gmail.com'), 'Designer', ROUND(40.6000), 'Kolkata', NOW()),
(UPPER('Saravanan V'), LOWER('saravanan@gmail.com'), 'Developer', ROUND(56000), 'Madurai', NOW()),
(UPPER('Deepika R'), LOWER('deepika@gmail.com'), 'Manager', ROUND(72.5000), 'Delhi', NOW()),
(UPPER('Prakash J'), LOWER('prakash@gmail.com'), 'Developer', ROUND(49.6000), 'Bangalore', NOW()),
(UPPER('Renu Sharma'), LOWER('renu@gmail.com'), 'HR', ROUND(35500), 'Jaipur', NOW()),
(UPPER('Yogesh P'), LOWER('yogesh@gmail.com'), 'Tester', ROUND(43.2000), 'Trichy', NOW()),
(UPPER('Monika S'), LOWER('monika@gmail.com'), 'Designer', ROUND(4.2000), 'Chennai', NOW());



select * from comemployees;

select AVG (emp_salary) from comemployees;
select count(*) from comemployees;
select count(emp_name) from comemployees;
select max(emp_salary) from comemployees;
select min(emp_salary) from comemployees;

