🚌 Hệ thống đặt vé xe khách (Bus Ticket Booking System)

Đây là một ứng dụng web full-stack cho phép người dùng tìm chuyến xe, đặt vé, thanh toán online và nhận xác nhận qua email.

📌 Tính năng chính
🔐 Đăng ký / đăng nhập tài khoản người dùng
🛡️ Mã hóa mật khẩu bằng bcrypt
🎟️ Xem danh sách chuyến xe và đặt vé
💳 Tích hợp thanh toán trực tuyến qua MoMo Payment
📧 Gửi email xác nhận sau khi đặt vé thành công (NodeMailer)
📊 Sử dụng MySQL để quản lý dữ liệu người dùng, chuyến xe và vé
🔑 Xác thực API bằng JWT (JSON Web Token)
🧰 Công nghệ sử dụng

Frontend:

HTML5
CSS3
JavaScript (Vanilla JS)

Backend:

Node.js
Express.js

Cơ sở dữ liệu:

MySQL

Bảo mật & xác thực:

JWT (JSON Web Token)
bcrypt

Dịch vụ bên ngoài:

MoMo Payment API
NodeMailer (gửi email)
📂 Cấu trúc dự án
/project-root
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middlewares/
│   ├── config/
│   └── server.js
│
├── frontend/
│   ├── html/
│   ├── css/
│   └── js/
│
├── database/
│   └── schema.sql
│
└── README.md
⚙️ Hướng dẫn cài đặt
1. Clone project về máy
git clone https://github.com/your-username/bus-ticket-system.git
cd bus-ticket-system
2. Cài đặt thư viện
npm install
3. Cấu hình biến môi trường

Tạo file .env trong thư mục gốc:

PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=bus_booking

JWT_SECRET=your_secret_key

MOMO_PARTNER_CODE=your_momo_code
MOMO_ACCESS_KEY=your_access_key
MOMO_SECRET_KEY=your_secret_key

EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
4. Import database

Chạy file SQL vào MySQL:

mysql -u root -p bus_booking < database/schema.sql
5. Chạy project
npm start

Truy cập:

http://localhost:5000
📧 Chức năng gửi email

Sau khi đặt vé thành công, hệ thống sẽ tự động gửi email xác nhận cho người dùng thông qua NodeMailer.

💳 Thanh toán

Dự án tích hợp MoMo Payment Gateway để mô phỏng quy trình thanh toán thực tế.
