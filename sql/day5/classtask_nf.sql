CREATE DATABASE election_result;
USE election_result;

CREATE TABLE district (
    district_id INT PRIMARY KEY AUTO_INCREMENT,
    district_name VARCHAR(50) UNIQUE
);

CREATE TABLE constituency (
    constituency_id INT PRIMARY KEY AUTO_INCREMENT,
    constituency_name VARCHAR(50),
    district_id INT,
    
    FOREIGN KEY (district_id)
    REFERENCES district(district_id)
);


INSERT INTO constituency(constituency_name, district_id) VALUES
('T Nagar',1),
('Anna Nagar',1),
('RS Puram',2),
('Gandhipuram',2),
('Mattuthavani',3),
('KK Nagar',3),
('Hasthampatti',4),
('Ammapet',4),
('Srirangam',5),
('Woraiyur',5),
('Palayamkottai',6),
('Melapalayam',6),
('Perundurai',7),
('Gobichettipalayam',7),
('Katpadi',8),
('Gudiyatham',8),
('Kovilpatti',9),
('Ettayapuram',9),
('Palani',10),
('Oddanchatram',10);




CREATE TABLE party (
    party_id INT PRIMARY KEY AUTO_INCREMENT,
    party_name VARCHAR(50) UNIQUE,
    party_symbol VARCHAR(50)
);

INSERT INTO party(party_name, party_symbol) VALUES
('DMK','Rising Sun'),
('AIADMK','Two Leaves'),
('BJP','Lotus'),
('INC','Hand'),
('NTK','Mic'),
('PMK','Mango'),
('DMDK','Drum'),
('TVK','Torch'),
('MNM','Battery Torch'),
('VCK','Pot'),
('CPI','Ears of Corn'),
('CPI(M)','Hammer Sickle'),
('BSP','Elephant'),
('AAP','Broom'),
('TMC','Flowers'),
('YSRCP','Fan'),
('JD(U)','Arrow'),
('RJD','Lantern'),
('SHS','Bow Arrow'),
('NCP','Clock');

CREATE TABLE candidate (
    candidate_id INT PRIMARY KEY AUTO_INCREMENT,
    candidate_name VARCHAR(50),
    age INT,
    gender VARCHAR(10),
    
    party_id INT,
    constituency_id INT,

    FOREIGN KEY (party_id)
    REFERENCES party(party_id),

    FOREIGN KEY (constituency_id)
    REFERENCES constituency(constituency_id)
);

INSERT INTO candidate
(candidate_name, age, gender, party_id, constituency_id)
VALUES
('Arun Kumar',35,'Male',1,1),
('Priya Devi',40,'Female',2,2),
('Karthik Raja',38,'Male',3,3),
('Sneha Rani',29,'Female',4,4),
('Vignesh',45,'Male',5,5),
('Divya',34,'Female',6,6),
('Harish',50,'Male',7,7),
('Keerthana',31,'Female',8,8),
('Lokesh',42,'Male',9,9),
('Nandhini',37,'Female',10,10),
('Sathish',48,'Male',11,11),
('Ramya',33,'Female',12,12),
('Dinesh',39,'Male',13,13),
('Pavithra',28,'Female',14,14),
('Ashwin',44,'Male',15,15),
('Meena',36,'Female',16,16),
('Prakash',41,'Male',17,17),
('Anitha',30,'Female',18,18),
('Ragul',46,'Male',19,19),
('Kavya',32,'Female',20,20);

CREATE TABLE result (
    result_id INT PRIMARY KEY AUTO_INCREMENT,
    candidate_id INT,
    election_year YEAR,
    status VARCHAR(20),

    FOREIGN KEY (candidate_id)
    REFERENCES candidate(candidate_id)
);

INSERT INTO result
(candidate_id, election_year, status)
VALUES
(1,2021,'Won'),
(2,2021,'Lost'),
(3,2021,'Won'),
(4,2021,'Lost'),
(5,2021,'Won'),
(6,2021,'Lost'),
(7,2021,'Won'),
(8,2021,'Lost'),
(9,2021,'Won'),
(10,2021,'Lost'),
(11,2026,'Won'),
(12,2026,'Lost'),
(13,2026,'Won'),
(14,2026,'Lost'),
(15,2026,'Won'),
(16,2026,'Lost'),
(17,2026,'Won'),
(18,2026,'Lost'),
(19,2026,'Won'),
(20,2026,'Lost');

CREATE TABLE vote_count (
    vote_id INT PRIMARY KEY AUTO_INCREMENT,
    result_id INT,
    total_votes INT,

    FOREIGN KEY (result_id)
    REFERENCES result(result_id)
);

INSERT INTO vote_count(result_id, total_votes)
VALUES
(1,125000),
(2,98000),
(3,143000),
(4,87000),
(5,156000),
(6,92000),
(7,132000),
(8,89000),
(9,167000),
(10,76000),
(11,182000),
(12,99000),
(13,174000),
(14,88000),
(15,165000),
(16,95000),
(17,149000),
(18,91000),
(19,158000),
(20,83000);


INSERT INTO district(district_name) VALUES
('Chennai'),
('Coimbatore'),
('Madurai'),
('Salem'),
('Trichy'),
('Tirunelveli'),
('Erode'),
('Vellore'),
('Thoothukudi'),
('Dindigul'),
('Karur'),
('Namakkal'),
('Thanjavur'),
('Kanchipuram'),
('Cuddalore'),
('Villupuram'),
('Nagapattinam'),
('Sivagangai'),
('Virudhunagar'),
('Dharmapuri');


select * from vote_count;

