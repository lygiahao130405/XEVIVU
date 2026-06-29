const express = require('express');
const axios = require('axios');
const crypto = require('crypto');
const router = express.Router();

router.post('/momo', async (req, res) => {
  const { amount, orderId } = req.body;
  const endpoint = process.env.MOMO_ENDPOINT;
  const partnerCode = process.env.MOMO_PARTNER_CODE;
  const accessKey = process.env.MOMO_ACCESS_KEY;
  const secretKey = process.env.MOMO_SECRET_KEY;
  const requestId = orderId + '-' + Date.now();
  const orderInfo = "Thanh toán đặt vé xe";
  const redirectUrl = "http://localhost:3000/thankyou.html";
  const ipnUrl = "http://localhost:3000/ipn";
  const requestType = "captureWallet";
  const extraData = "";

  const rawSignature = `accessKey=${accessKey}&amount=${amount}&extraData=${extraData}&ipnUrl=${ipnUrl}&orderId=${orderId}&orderInfo=${orderInfo}&partnerCode=${partnerCode}&redirectUrl=${redirectUrl}&requestId=${requestId}&requestType=${requestType}`;
  const signature = crypto.createHmac('sha256', secretKey).update(rawSignature).digest('hex');

  const requestBody = {
    partnerCode,
    accessKey,
    requestId,
    amount,
    orderId,
    orderInfo,
    redirectUrl,
    ipnUrl,
    extraData,
    requestType,
    signature,
    lang: 'vi'
  };

  try {
    const response = await axios.post(endpoint, requestBody);
    res.json({ payUrl: response.data.payUrl });
  } catch (err) {
    console.error(err);
    res.status(500).send('Lỗi thanh toán MoMo');
  }
});

module.exports = router;
