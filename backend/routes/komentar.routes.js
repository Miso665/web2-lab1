const express = require("express");
const Komentar = require("../models/komentar");
const router = express.Router();
const moment = require("moment-timezone");
const req = require("express/lib/request");

router.get("/komentari/:idUtakmice", async (req, res) => {
    try {
        const { idUtakmice } = req.params;
        const results = await Komentar.getAll(idUtakmice);
        return res.json(results);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

router.post("/komentar/post", async (req, res) => {
    try {
        const { idUtakmice, tekst, email } = req.body;
        const zona = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const vrijeme = moment().tz(zona).format();
        const results = await Komentar.addNew(idUtakmice, tekst, email, vrijeme);
        res.status(200)
        return res.json(results);

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

router.post("/komentar/edit", async (req, res) => {
    try {
        const { idKomentara, tekst } = req.body;
        const zona = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const vrijeme = moment().tz(zona).format();
        const results = await Komentar.update(idKomentara, tekst, vrijeme)
        res.status(200);
        return res.json(results);

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }

});

router.post("/komentar/delete/:idKomentara", async (req, res) => {
    try {
        const { idKomentara } = req.params;
        const results = await Komentar.delete(idKomentara);
        res.status(200);
        return res.json(results);

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;