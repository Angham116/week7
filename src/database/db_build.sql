BEGIN;

DROP TABLE IF EXISTS users, posts;

CREATE TABLE users (
 id SERIAL PRIMARY KEY,
 username varchar(20),
 email varchar(30),
 password varchar(30)
);

CREATE TABLE posts (
 id SERIAL PRIMARY KEY,
 description varchar,
 user_id INTEGER REFERENCES users(id)
);

INSERT INTO users (username, email, password) VALUES 
('Angham', 'angham@gmail.com', '123456'),
('Angham1', 'angham95@gmail.com', '123456'),
('Angham2', 'angham97@gmail.com', '123456');

INSERT INTO posts (description, user_id) VALUES 
('hhhhhh', '1'),
('jjjjjj', '2'),
('kkkkkk', '3');

COMMIT;

