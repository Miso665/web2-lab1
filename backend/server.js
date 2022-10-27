const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const pg = require('pg');
const db = require('./db');
const { urlencoded } = require('express');
const PORT = process.env.PORT || 5000;

const routers = {
    '/auth': require('./routes/auth.routes'),
    '/home': require('./routes/home.routes'),
    '/komentar': require('./routes/komentar.routes')
}

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));

for (const path in routers) {
    app.use(path, routers[path]);
}

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build")))
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "./client/build/index.html"));
    });
}

app.listen(PORT, () => {
    console.log(`Server je na portu ` + PORT);
});

