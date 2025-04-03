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
