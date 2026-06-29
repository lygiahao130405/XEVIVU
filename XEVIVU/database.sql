
CREATE DATABASE datvexe;
USE datvexe;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) UNIQUE,
  password_hash VARCHAR(255)
);

CREATE TABLE loai_xe (
  id INT AUTO_INCREMENT PRIMARY KEY,
  ten_loai VARCHAR(100)
);

CREATE TABLE ve_xe (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  diem_di VARCHAR(100),
  diem_den VARCHAR(100),
  ngay_di DATE,
  so_ve INT,
  loai_xe_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (loai_xe_id) REFERENCES loai_xe(id)
);
