const db = require('../config/db');

exports.createTicket = (data, callback) => {
  const sql = 'INSERT INTO ve_xe SET ?';
  db.query(sql, data, callback);
};
