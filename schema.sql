DROP DATABASE IF EXISTS project;

CREATE DATABASE project;

USE project;



CREATE TABLE users
(
  id int NOT NULL
  AUTO_INCREMENT,
  username varchar
  (255) NOT NULL UNIQUE,
  first_name varchar
  (255) NOT NULL ,
  last_name varchar
  (255) NOT NULL ,
  password varchar
  (255) NOT NULL ,
  PRIMARY KEY
  (ID)
);
  CREATE TABLE organizations
  (
    id int NOT NULL
    AUTO_INCREMENT,
   name varchar
    (50) NOT NULL UNIQUE,
   description varchar
    (250) NOT NULL,
   userID int NOT NULL,
   PRIMARY KEY
    (ID),
   FOREIGN KEY
    (userID) REFERENCES users
    (id)
);
    CREATE TABLE projects
    (
      id int NOT NULL
      AUTO_INCREMENT,
  name varchar
      (50) NOT NULL,
  description varchar
      (250),
  organizationID int NOT NULL,
  PRIMARY KEY
      (ID),
  FOREIGN KEY
      (organizationID) REFERENCES organizations
      (id)
);
      CREATE TABLE feeds
      (
        id int NOT NULL
        AUTO_INCREMENT,
   name varchar
        (50) NOT NULL UNIQUE,
   description varchar
        (250) NOT NULL,
   type varchar
        (50) NOT NULL,
   projectID int NOT NULL,
   PRIMARY KEY
        (ID),
   FOREIGN KEY
        (projectID) REFERENCES projects
        (id)
);

 