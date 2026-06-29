const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();
const userModel = require('../models/userModel');

router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  userModel.createUser(email, hashed, (err) => {
    if (err) return res.status(500).send('Lỗi đăng ký');
    res.send('Đăng ký thành công!');
  });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  userModel.findUserByEmail(email, async (err, results) => {
    if (err || results.length === 0) return res.status(401).send('Sai thông tin');
    const user = results[0];
    const match = await bcrypt.compare(password, user.password_hash);
    if (!match) return res.status(401).send('Sai mật khẩu');
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  });
});

module.exports = router;