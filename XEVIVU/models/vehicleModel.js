const db = require('../config/db');

exports.getAllVehicles = callback => {
  const sql = 'SELECT * FROM loai_xe';
  db.query(sql, callback);
};