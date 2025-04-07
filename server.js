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



