-- Initialize Database Schema

create table member (
id bigint not null auto_increment,
name varchar(50) not null,
expiry_date varchar(12) not null,
primary key (id)
);

create table transaction (
id bigint not null auto_increment,
date varchar(12) not null,
description varchar(50) not null,
amount double(19,4) not null,
primary key (id)
);

