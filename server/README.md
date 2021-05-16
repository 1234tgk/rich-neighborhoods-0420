# Server - Side of Club Ledger App

## How to Build

This gradle project can be built with any IDE of choice (IntelliJ, Eclipse, ...).\
If the project needs to be built and run by command, run:
```
./gradlew build
./gradlew bootrun
```

## Set application.properties file
app.prop.template file is there for the reference for this section.\
Paste the code below after creating application.properties file under resource folder:
```
spring.datasource.url = jdbc:mysql://{JDBC connection string}:{port}/{db_name}
spring.datasource.username = {user}
spring.datasource.password = {password}
spring.jpa.hibernate.ddl-auto = update
spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQLDialect
```
The project currently only takes MySQL.\
`port={port number}` can be added to set custom port number.\
The default location this project opens from is http://localhost:8080\
(which can be used to set up .env file in client side).

## SQL Code to create database and schema
The project requires a local or cloud server.\
These are the required SQL code to initiate the table:
```sql
create schema rich_neighbor;

use rich_neighbor;

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
```