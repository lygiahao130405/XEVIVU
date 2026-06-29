
const express = require('express');
const router = express.Router();
const mailer = require('../utils/mailer');
const ticketModel = require('../models/ticketModel');

router.post('/', (req, res) => {
  const { name, from, to, date, quantity, vehicleType, email } = req.body;
  const ticket = {
    diem_di: from,
    diem_den: to,
    ngay_di: date,
    so_ve: quantity,
    loai_xe_id: vehicleType === 'limousine' ? 1 : 2,
    user_id: 1
  };
  ticketModel.createTicket(ticket, (err) => {
    if (err) return res.status(500).send('Lỗi đặt vé');
    const message = `Bạn đã đặt vé từ ${from} đến ${to}, ngày ${date}, loại xe: ${vehicleType}`;
    mailer.sendMail(email, 'Xác nhận vé', message);
    res.send('Đặt vé thành công');
  });
});

module.exports = router;