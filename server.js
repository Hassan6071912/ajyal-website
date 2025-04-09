const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// استخدم مجلد public لعرض الملفات الثابتة مثل index.html
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
