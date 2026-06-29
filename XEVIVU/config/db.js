const mysql = require('mysql2');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'datvexe'
});

conn.connect(err => {
  if (err) throw err;
  console.log('Kết nối MySQL thành công');
});

module.exports = conn;