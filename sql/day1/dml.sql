CREATE DATABASE election;
use election;

CREATE TABLE constitution (

constitution_id int primary key auto_increment,
district_name varchar(200) not null,
constitution_name varchar(200) not null,
constitution_dis_id varchar(200) not null

);

CREATE TABLE parties (

party_id int primary key auto_increment,
party_symbol varchar(200) not null,
party_name varchar(200) not null,
party_dis_number varchar(200) not null

);


CREATE TABLE candidates (

candidate_id int primary key auto_increment,
candidate_name varchar(200) not null,
candidate_age varchar(200) not null,
candidate_mobile_number varchar(200) not null,
candidate_party_name varchar(200) not null,
candidate_constitution varchar(200) not null


);



-- insert 5 datas in parties-----
USE parties;
INSERT INTO parties ( party_symbol, party_name, party_dis_number) VALUES ("WHISLE","TVK", "10"),("SUN","DMK", "20"),("plants","ADMK", "34"),("LANGUAGE","NTK", "23"),("WHISLE","TVK", "13");



DELETE FROM parties WHERE party_id = 6;


SELECT * FROM parties;


INSERT INTO candidates ( candidate_name, candidate_age, candidate_mobile_number, candidate_party_name, candidate_constitution ) 
VALUES ("VIJAY", "44","9876543201","TVK", "12"),
("ARUN", "44","9876543201","DMK", "12"),
("JAY", "60","9876543256","ADMK","1"),
("RAHIKA", "78","9678598201","HWR","3"),
("LILY", "53","9876541201","QWE","5"),
("NARMADHA", "52","9876543304","YUI","6"),
("SUBA", "62","9876543234","IOP","4"),
("VISHNU", "56","9876543201","BNM","7"),
("ANAND", "61","9876543201","DFG","10"),
("ROSHAN", "64","9876543201","ASD","2"
);

SELECT * FROM candidates;

UPDATE candidates SET candidate_party_name = "DMK", candidate_constitution = "11" where candidate_id =2;

UPDATE constitution SET constitution_name = "Solinganallur",constitution_dis_id="27" where constitution_id = 2;


DELETE FROM constitutionconstitution WHERE constitution_id = 3;