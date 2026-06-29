🚌 Hệ thống đặt vé xe khách (Bus Ticket Booking System)

Ứng dụng web full-stack cho phép người dùng tìm chuyến xe, đặt vé, thanh toán online và nhận xác nhận qua email.

✨ Tính năng chính

Đăng ký / đăng nhập người dùng

Mã hóa mật khẩu bằng bcrypt

Xem danh sách chuyến xe & đặt vé

Thanh toán online qua MoMo Payment

Gửi email xác nhận sau khi đặt vé (NodeMailer)

Quản lý dữ liệu bằng MySQL

Xác thực API bằng JWT

🧰 Công nghệ sử dụng

Frontend

HTML5

CSS3
JavaScript (Vanilla JS)

Backend

Node.js

Express.js

Database

MySQL

Authentication & Security

JWT (JSON Web Token)

bcrypt

External Services

MoMo Payment API

NodeMailer


⚙️ Hướng dẫn cài đặt

1. Clone project

git clone https://github.com/lygiahao130405/XEVIVU.git

cd bus-ticket-system

2. Cài đặt dependencies

npm install

3. Tạo file môi trường .env

PORT=5000


DB_HOST=localhost

DB_USER=root

DB_PASSWORD=your_password

DB_NAME=bus_booking


JWT_SECRET=your_secret_key


MOMO_PARTNER_CODE=your_code

MOMO_ACCESS_KEY=your_key

MOMO_SECRET_KEY=your_secret


EMAIL_USER=your_email@gmail.com

EMAIL_PASS=your_email_password

4. Import database

mysql -u root -p bus_booking < database/schema.sql

5. Chạy project

npm start

Truy cập:

http://localhost:5000

📧 Hệ thống email

Sau khi đặt vé thành công, hệ thống tự động gửi email xác nhận qua NodeMailer.

💳 Thanh toán        

Tích hợp MoMo Payment Gateway để xử lý thanh toán online.

🚀 Hướng phát triển

Thêm trang admin quản lý vé

Nâng cấp UI bằng ReactJS

Thêm chọn ghế ngồi

Deploy lên Render / Railway / VPS

👨‍💻 Tác giả
Name: Lý Gia Hào

GitHub: https://github.com/lygiahao130405

Email: lyhao547@gmail.com
