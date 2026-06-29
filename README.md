## **🚌 Hệ thống đặt vé xe khách (Bus Ticket Booking System)**



Ứng dụng web full-stack cho phép người dùng tìm chuyến xe, đặt vé, thanh toán online và nhận xác nhận qua email.



### **✨ Tính năng chính**

Đăng ký / đăng nhập người dùng

Mã hóa mật khẩu bằng bcrypt

Xem danh sách chuyến xe \& đặt vé

Thanh toán online qua MoMo Payment

Gửi email xác nhận sau khi đặt vé (NodeMailer)

Quản lý dữ liệu bằng MySQL

Xác thực API bằng JWT



### **🧰 Công nghệ sử dụng**

Frontend

HTML5

CSS3

JavaScript (Vanilla JS)

Backend

Node.js

Express.js

Database

MySQL

Authentication \& Security

JWT (JSON Web Token)

bcrypt

External Services

MoMo Payment API

NodeMailer



### ⚙️ Hướng dẫn cài đặt

1\. Clone project

git clone https://github.com/lygiahao1304/XEVIVU.git

cd bus-ticket-system

2\. Cài đặt dependencies

npm install

3\. Tạo file môi trường .env

PORT=5000



DB\_HOST=localhost

DB\_USER=root

DB\_PASSWORD=your\_password

DB\_NAME=bus\_booking



JWT\_SECRET=your\_secret\_key



MOMO\_PARTNER\_CODE=your\_code

MOMO\_ACCESS\_KEY=your\_key

MOMO\_SECRET\_KEY=your\_secret



EMAIL\_USER=your\_email@gmail.com

EMAIL\_PASS=your\_email\_password

4\. Import database

mysql -u root -p bus\_booking < database/schema.sql

5\. Chạy project

npm start



Truy cập:



http://localhost:5000

### **📧 Hệ thống email**



Sau khi đặt vé thành công, hệ thống tự động gửi email xác nhận qua NodeMailer.



### **💳 Thanh toán**



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
