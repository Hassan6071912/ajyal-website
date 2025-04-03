CREATE DATABASE ajyal;
USE ajyal;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    username VARCHAR(50) UNIQUE,
    password VARCHAR(255),
    phone VARCHAR(20),
    role ENUM('admin', 'parent') NOT NULL
);
CREATE TABLE activities (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    date DATE,
    image VARCHAR(255)
);
CREATE TABLE activities (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    date DATE,
    image VARCHAR(255)
);

CREATE DATABASE ajyal;
USE ajyal;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    username VARCHAR(50) UNIQUE,
    password VARCHAR(255),
    phone VARCHAR(20),
    role ENUM('admin', 'parent') NOT NULL
);
