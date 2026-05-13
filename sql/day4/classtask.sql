
create database tnvoterdb;
use tnvoterdb;

create table voters(
voter_id INT primary key auto_increment,
voter_name varchar(20),
age int,
gender varchar (20),
district varchar (30),
constitution varchar (30),
party_name varchar (40)
);

INSERT INTO voters (voter_name, age, gender, district, constitution, party_name) VALUES
(UPPER('bharani'), 21, LOWER('female'), 'Chennai', 'K.K Nagar', UPPER('tvk')),
(UPPER('arun'), 24, LOWER('male'), 'Coimbatore', 'South Coimbatore', UPPER('dmk')),
(UPPER('divya'), 22, LOWER('female'), 'Madurai', 'Madurai Central', UPPER('aiadmk')),
(UPPER('karthik'), 28, LOWER('male'), 'Salem', 'Salem North', UPPER('bjp')),
(UPPER('meena'), 25, LOWER('female'), 'Trichy', 'Srirangam', UPPER('congress')),
(UPPER('vignesh'), 30, LOWER('male'), 'Erode', 'Erode East', UPPER('ntk')),
(UPPER('priya'), 23, LOWER('female'), 'Vellore', 'Katpadi', UPPER('tvk')),
(UPPER('surya'), 27, LOWER('male'), 'Tirunelveli', 'Palayamkottai', UPPER('dmk')),
(UPPER('anitha'), 26, LOWER('female'), 'Thoothukudi', 'Thoothukudi', UPPER('aiadmk')),
(UPPER('rahul'), 29, LOWER('male'), 'Chennai', 'Velachery', UPPER('bjp')),
(UPPER('keerthana'), 20, LOWER('female'), 'Kanchipuram', 'Tambaram', UPPER('congress')),
(UPPER('dinesh'), 31, LOWER('male'), 'Namakkal', 'Rasipuram', UPPER('ntk')),
(UPPER('sneha'), 24, LOWER('female'), 'Dharmapuri', 'Pennagaram', UPPER('tvk')),
(UPPER('akash'), 22, LOWER('male'), 'Karur', 'Karur', UPPER('dmk')),
(UPPER('harini'), 27, LOWER('female'), 'Chennai', 'Anna Nagar', UPPER('aiadmk')),
(UPPER('mohan'), 35, LOWER('male'), 'Cuddalore', 'Panruti', UPPER('bjp')),
(UPPER('nithya'), 21, LOWER('female'), 'Villupuram', 'Villupuram', UPPER('congress')),
(UPPER('rakesh'), 26, LOWER('male'), 'Tanjore', 'Thanjavur', UPPER('ntk')),
(UPPER('pooja'), 23, LOWER('female'), 'Nagapattinam', 'Mayiladuthurai', UPPER('tvk')),
(UPPER('ajith'), 32, LOWER('male'), 'Chennai', 'T Nagar', UPPER('dmk')),
(UPPER('deepika'), 28, LOWER('female'), 'Sivagangai', 'Karaikudi', UPPER('aiadmk')),
(UPPER('gokul'), 25, LOWER('male'), 'Dindigul', 'Nilakottai', UPPER('bjp')),
(UPPER('reshma'), 24, LOWER('female'), 'Krishnagiri', 'Hosur', UPPER('congress')),
(UPPER('sathish'), 29, LOWER('male'), 'Virudhunagar', 'Aruppukottai', UPPER('ntk')),
(UPPER('monika'), 22, LOWER('female'), 'Tiruppur', 'Avinashi', UPPER('tvk')),
(UPPER('naveen'), 33, LOWER('male'), 'Ranipet', 'Arcot', UPPER('dmk')),
(UPPER('janani'), 26, LOWER('female'), 'Perambalur', 'Kunnam', UPPER('aiadmk')),
(UPPER('kishore'), 27, LOWER('male'), 'Pudukkottai', 'Pudukkottai', UPPER('bjp')),
(UPPER('swathi'), 23, LOWER('female'), 'Ariyalur', 'Jayankondam', UPPER('congress')),
(UPPER('manoj'), 30, LOWER('male'), 'Nilgiris', 'Udhagamandalam', UPPER('ntk'));

select * from voters;

select voter_name FROM voters;

select party_name FROM voters;

select * from voters where age > 30;

select * from voters where district = 'chennai';

select party_name, count(*) from voters 
where party_name = 'dmk'
group by party_name ;

select * from voters order by age asc;

select * from voters order by district asc;


select count(*) from voters;

alter table voters add  voter_count int;
UPDATE voters SET voter_count = 1200 WHERE voter_id = 1;
UPDATE voters SET voter_count = 1500 WHERE voter_id = 2;
UPDATE voters SET voter_count = 1800 WHERE voter_id = 3;
UPDATE voters SET voter_count = 2100 WHERE voter_id = 4;
UPDATE voters SET voter_count = 1700 WHERE voter_id = 5;
UPDATE voters SET voter_count = 2500 WHERE voter_id = 6;
UPDATE voters SET voter_count = 3000 WHERE voter_id = 7;
UPDATE voters SET voter_count = 2750 WHERE voter_id = 8;
UPDATE voters SET voter_count = 1950 WHERE voter_id = 9;
UPDATE voters SET voter_count = 2250 WHERE voter_id = 10;
UPDATE voters SET voter_count = 1600 WHERE voter_id = 11;
UPDATE voters SET voter_count = 1450 WHERE voter_id = 12;
UPDATE voters SET voter_count = 2800 WHERE voter_id = 13;
UPDATE voters SET voter_count = 3200 WHERE voter_id = 14;
UPDATE voters SET voter_count = 2600 WHERE voter_id = 15;
UPDATE voters SET voter_count = 1900 WHERE voter_id = 16;
UPDATE voters SET voter_count = 2300 WHERE voter_id = 17;
UPDATE voters SET voter_count = 3100 WHERE voter_id = 18;
UPDATE voters SET voter_count = 1750 WHERE voter_id = 19;
UPDATE voters SET voter_count = 2400 WHERE voter_id = 20;
UPDATE voters SET voter_count = 3500 WHERE voter_id = 21;
UPDATE voters SET voter_count = 2700 WHERE voter_id = 22;
UPDATE voters SET voter_count = 2200 WHERE voter_id = 23;
UPDATE voters SET voter_count = 2050 WHERE voter_id = 24;
UPDATE voters SET voter_count = 2900 WHERE voter_id = 25;
UPDATE voters SET voter_count = 3300 WHERE voter_id = 26;
UPDATE voters SET voter_count = 1850 WHERE voter_id = 27;
UPDATE voters SET voter_count = 2150 WHERE voter_id = 28;
UPDATE voters SET voter_count = 3400 WHERE voter_id = 29;
UPDATE voters SET voter_count = 4000 WHERE voter_id = 30;


select district, avg(voter_id) from voters group by district having  avg(voter_id) >28;

