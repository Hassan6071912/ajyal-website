const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // ضع كلمة المرور هنا
    database: 'ajyal'
});

db.connect((err) => {
    if (err) {
        console.error('خطأ في الاتصال بقاعدة البيانات:', err);
    } else {
        console.log('✅ تم الاتصال بقاعدة البيانات بنجاح');
    }
});

module.exports = db;
