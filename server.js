const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 3000;
const SECRET_KEY = "secret123"; // استبدلها بمفتاح أقوى

app.use(cors());
app.use(bodyParser.json());

let admins = [
    { username: "admin", password: bcrypt.hashSync("123456", 10) },
    { username: "hassan", password: bcrypt.hashSync("hassan2024", 10) }
];

// تسجيل الدخول
app.post("/admin-login", (req, res) => {
    const { username, password } = req.body;
    const admin = admins.find(user => user.username === username);

    if (admin && bcrypt.compareSync(password, admin.password)) {
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
        res.json({ success: true, token });
    } else {
        res.json({ success: false });
    }
});

// تشغيل السيرفر
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


const express = require('express');
const db = require('./db');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// تسجيل حساب جديد
app.post('/signup', (req, res) => {
    const { name, username, password, phone, role } = req.body;

    // تشفير كلمة المرور
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) return res.status(500).json({ error: 'خطأ في التشفير' });

        const sql = "INSERT INTO users (name, username, password, phone, role) VALUES (?, ?, ?, ?, ?)";
        db.query(sql, [name, username, hashedPassword, phone, role], (err, result) => {
            if (err) return res.status(500).json({ error: 'خطأ في التسجيل' });
            res.json({ message: '✅ تم إنشاء الحساب بنجاح!' });
        });
    });
});

// تشغيل السيرفر
app.listen(3001, () => {
    console.log('🚀 السيرفر يعمل على http://localhost:3001');
});
