-- Create Database
create database college_management;

-- Use Database
use college_management;

-- Create students table
create table students (
    student_id int primary key auto_increment,
    student_name varchar(50),
    department varchar(50),
    marks int
);

-- Create log table
create table student_logs (
    log_id int primary key auto_increment,
    message varchar(200)
);

-- Create AFTER INSERT Trigger
delimiter //

create trigger trg_after_insert_student
after insert on students
for each row
begin
    insert into student_logs(message)
    values (
        concat('New student added: ', new.student_name)
    );
end //

delimiter ;

-- Insert sample values
insert into students(student_name, department, marks)
values
('Bharani', 'CSE', 90),
('Priya', 'IT', 85);

-- View students table
select * from students;

-- View logs table
select * from student_logs;