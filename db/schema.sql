DROP DATABASE IF EXISTS hvpt_db;
CREATE DATABASE hvpt_db;


/* Schema for main SQL database*/
-- USE hvpt_db;

-- /* Create USERS table with a primary key that auto-increments, username, email, and password */
-- CREATE TABLE user (
--   id INT NOT NULL AUTO_INCREMENT,
--   name VARCHAR(100) NOT NULL,
--   email VARCHAR(100) NOT NULL,
--   password PASSWORD(100) NOT NULL,
--   PRIMARY KEY (id)
-- );

-- /* Create COURSES table with a primary key that auto-increments, course ID, course name, and language */
-- CREATE TABLE courses (
--   id INT NOT NULL AUTO_INCREMENT,
--   courseID INT NOT NULL,
--   lang VARCHAR(100) NOT NULL,
--   PRIMARY KEY (id)
-- );

-- /* Create MODULE table with module ID, module name, and courseID */
-- CREATE TABLE module (
--   courseID INT NOT NULL,
--   moduleID INT NOT NULL,
--   moduleName VARCHAR(100) NOT NULL,
--   PRIMARY KEY (courseID)
-- );

-- /* Create ACTIVITY table with question set, moduleID, status, due date */
-- CREATE TABLE activity (
--   moduleID INT NOT NULL,
--   questionSet VARCHAR(100) NOT NULL,
--   dueDate DATETIME NOT NULL, 
--   stat IF(completed, 'true', 'false') completed
--   PRIMARY KEY (moduleID)
-- );

-- /* Create QUESTIONS table with question set, moduleID, status, due date */
-- CREATE TABLE question (
--   moduleID INT NOT NULL,
--   questionSet VARCHAR(100) NOT NULL,
--   dueDate DATETIME NOT NULL, 
--   PRIMARY KEY (moduleID)
-- --   foreign key association with activity
-- );


