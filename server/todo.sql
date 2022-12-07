show databases;
use kdt;

CREATE TABLE todo (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    done tinyint(1) NOT NULL DEFAULT 0
);

SHOW tables;

DESC todo;

INSERT INTO todo (title, done) VALUES('boohee todo1', 0);
INSERT INTO todo (title, done) VALUES('boohee todo2', 1);
INSERT INTO todo (title, done) VALUES('boohee todo3', 0);
INSERT INTO todo (title, done) VALUES('boohee todo4', 1);
INSERT INTO todo (title, done) VALUES('boohee todo5', 1);
INSERT INTO todo (title, done) VALUES('boohee todo6', 0);

SELECT * FROM todo;