# Club Ledger App Project

## Instructions for Devs

### Git WorkFlow:
To make your branch...
```
git pull
git branch <branch-name>
git checkout <branch-name>
```
(Shorthand of last two commands is: `git checkout -b <branch-name>`)
  \
If at some point you need to update your master during your work...
```
git add -all
git commit -m "<commit-message>"
git checkout main
git pull
git checkout <branch-name>
git rebase main
```
  \
Once you make changes to your branches...
```
git add --all
git commit
```
(or `git commit -m "<commit-message>`")
```
git push
```
(if this causes error, do whatever git tells you to)\
(If I need to merge your change to the origin, create a pull request.)

### MySQL Table Creation
If using the database for the first time, run this sql script:\
(Database name can be anything: just remember it for the further use)
```sql
create schema testneighbor;

use testneighbor;

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
