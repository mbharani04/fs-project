use tnvoterdb;

create table election_results(
result_id int primary key auto_increment,
candidate_name varchar(20),
party_name varchar(20),
district varchar(20),
constituency varchar(20),
total_votes int,
election_year int
);

INSERT INTO election_results
(candidate_name, party_name, district, constituency, total_votes, election_year)
VALUES
(UPPER('Arun Kumar'), UPPER('DMK'), 'Chennai', 'Kolathur', 185600, 2021),
(UPPER('Bharani'), UPPER('TVK'), 'Chennai', 'K.K Nagar', 74250, 2023),
(UPPER('Karthik Raj'), UPPER('ADMK'), 'Madurai', 'Madurai Central', 168900, 2020),
(UPPER('Divya'), UPPER('BJP'), 'Coimbatore', 'Coimbatore South', 52140, 2022),
(UPPER('Nivetha'), UPPER('INC'), 'Trichy', 'Srirangam', 147890, 2021),
(UPPER('Praveen'), UPPER('DMK'), 'Salem', 'Salem North', 81230, 2019),
(UPPER('Harish'), UPPER('ADMK'), 'Tirunelveli', 'Palayamkottai', 165420, 2024),
(UPPER('Monika'), UPPER('TVK'), 'Vellore', 'Katpadi', 49870, 2020),
(UPPER('Sathish'), UPPER('BJP'), 'Erode', 'Erode East', 144210, 2023),
(UPPER('Keerthana'), UPPER('INC'), 'Thanjavur', 'Thanjavur', 53760, 2018),
(UPPER('Lokesh'), UPPER('DMK'), 'Kanchipuram', 'Tambaram', 201500, 2024),
(UPPER('Aishwarya'), UPPER('ADMK'), 'Cuddalore', 'Panruti', 68340, 2019),
(UPPER('Vignesh'), UPPER('TVK'), 'Chengalpattu', 'Pallavaram', 112450, 2022),
(UPPER('Sneha'), UPPER('BJP'), 'Namakkal', 'Rasipuram', 45890, 2021),
(UPPER('Ramesh'), UPPER('INC'), 'Dindigul', 'Nilakottai', 132670, 2023);


select * from election_results;

select candidate_name, party_name from election_results;

select candidate_name, total_votes from election_results
where total_votes >  70000;

select candidate_name, district  from election_results
where district =  "chennai";

select candidate_name, party_name  from election_results
where party_name =  "dmk";

select district, total_votes from election_results
where total_votes > 60000 and district = "chennai";

select * from election_results order by
total_votes asc;

select * from election_results order by
total_votes desc;

select * from election_results order by
district asc;

SELECT COUNT(*) AS total_candidates
FROM election_results;

SELECT party_name, SUM(total_votes) AS total_votes
FROM election_results
GROUP BY party_name;

select district, avg(total_votes) as avg_votes
FROM election_results
GROUP BY district;

select party_name, sum(total_votes) as total_votes
FROM election_results
GROUP BY party_name
having total_votes < 100000;

select party_name, sum(total_votes) as total_votes
FROM election_results
GROUP BY party_name
having total_votes >  60000;

SELECT district, MAX(total_votes) AS highest_votes
FROM election_results
GROUP BY district;