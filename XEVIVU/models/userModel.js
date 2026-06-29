const db = require('../config/db');

exports.createUser = (email, hash, callback) => {
  const sql = 'INSERT INTO users (email, password_hash) VALUES (?, ?)';
  db.query(sql, [email, hash], callback);
};

exports.findUserByEmail = (email, callback) => {
  const sql = 'SELECT * FROM users WHERE email = ?';
  db.query(sql, [email], callback);
};
