create database la_vie;
use la_vie;

create table patients(
	id int primary key auto_increment,
    name_patient varchar(100) not null,
    born date not null,
    email varchar(100) not null unique
);

create table psycho(
	id int primary key auto_increment,
    name_psycho varchar(100) not null,
    email_psycho varchar(100) not null,
    pass varchar(200),
    presentation varchar(800) not null
);

create table services(
	id int primary key auto_increment,
    patient_id int not null,
    psycho_id int not null,
    service_date date not null,
    note varchar(800),

	constraint FK_patient_id foreign key(patient_id) references patients(id) on delete cascade,
    constraint FK_psycho_id foreign key(psycho_id) references psycho(id) on delete cascade
);


 insert into patients(name_patient, born, email)
 values (
 "Patient 1",
 "1987-06-19",
 "patient1@gmail.com");
 
 insert into patients(name_patient, born, email)
 values (
 "Patient 2",
 "1960-5-19",
 "patient2@gmail.com");
 
 select * from patients;
 
 
 insert into psycho(name_psycho, email_psycho, pass, presentation)
 values (
 "Psycho 1", 
 "psycho1@gmail.com",
 "1234567890",
 "Hello World!(1).");
 
  insert into psycho(name_psycho, email_psycho, pass, presentation)
 values (
 "Psycho 2", 
 "psycho2@gmail.com",
 "1234567890",
 "Hello World!(2).");
 
 select * from psycho;
 
  insert into services(patient_id, psycho_id, service_date, note)
 values (
 "1", 
 "2",
 "2022-09-20",
 "Hello World!(services(1)).");
 
   insert into services(patient_id, psycho_id, service_date, note)
 values (
 "2", 
 "1",
 "2022-10-20",
 "Hello World!(services(2)).");
 
 select * from services;
 
 
