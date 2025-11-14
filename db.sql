DROP DATABASE IF EXISTS hackaton;

create database hackathon;
use hackathon;
CREATE TABLE movies (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(20),
    released DATE
);

CREATE TABLE users (
id INT PRIMARY KEY AUTO_INCREMENT,
first_name VARCHAR(30),
last_name VARCHAR(30),
email VARCHAR(30) UNIQUE,
password VARCHAR(50),
mobile VARCHAR(10),
birth DATE
);
CREATE TABLE reviews (
    id INT PRIMARY KEY AUTO_INCREMENT,
    movie_id INT,
    review VARCHAR(30),
    rating INT,
    user_id INT,
    modified TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (movie_id) REFERENCES movies(id)
);


INSERT INTO movies(title,released) VALUES
("Titanic","2000-1-12"),
("Masiha","2000-1-12"),
("Ravan","2000-1-12"),
("KGF","2000-1-12"),
("Ek Tha Tiger","2000-1-12"),
("Vivegam","2000-1-12"),
("Kantara","2000-1-12"),
("Ready Player One","2000-1-12"),
("Thamma","2000-1-12"),
("Pushpa","2000-1-12"),
("Khiladi","2000-1-12"),
("Lokah","2000-1-12");

CREATE TABLE shares(
review_id INT,
user_id INT,
FOREIGN KEY (user_id) REFERENCES users(id),
FOREIGN KEY (review_id) REFERENCES reviews(id)
);

insert into users(first_name, last_name, email, password, mobile, birth) values("Josh", "Biju", "jboneplus7t@gmail.com", "test", "9656867732", "2002-04-30");