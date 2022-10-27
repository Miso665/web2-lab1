const express = require("express");
const Utakmica = require("../models/utakmica");
const router = express.Router();
const req = require("express/lib/request");
const Tim = require("../models/tim");

router.get("/utakmice", async (req, res) => {
    try {
        const results = await Utakmica.getAll();
        return res.json(results);

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

router.get("/utakmica/:idUtakmice", async (req, res) => {
    try {
        const { idUtakmice } = req.params;
        const results = await Utakmica.getUtakmica(idUtakmice);
        return res.json(results);

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

router.post("/utakmica/edit", async (req, res) => {
    try {
        const { idUtakmice, gol1, gol2 } = req.body;
        let rezultat = 0
        if (gol1 > gol2) rezultat = 1
        else if (gol2 > gol1) rezultat = 2
        const results = await Utakmica.update(idUtakmice, gol1, gol2, rezultat);
        res.status(200);
        return res.json(results);

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

router.get("/tablica", async (req, res) => {
    try {
        const utakmice = await Utakmica.getAll();
        const timovi = await Tim.getAll();
        for (let tim of timovi) {
            let gol_razlika = 0
            let broj_pobjeda = 0
            let broj_poraza = 0
            let broj_remija = 0
            let odigrani_mecevi = 0
            let bodovi = 0
            for (let utakmica of utakmice) {
                if (utakmica.rezultat !== null) {
                    if (tim.id_tima === utakmica.id_tima1) {
                        if (utakmica.rezultat === 1) {
                            broj_pobjeda++;
                            bodovi += 3;
                        }
                        else if (utakmica.rezultat === 2) broj_poraza++;
                        else {
                            broj_remija++;
                            bodovi++;
                        }
                        gol_razlika += (utakmica.gol1 - utakmica.gol2)
                        odigrani_mecevi++;
                    } else if (tim.id_tima === utakmica.id_tima2) {
                        if (utakmica.rezultat === 1) broj_poraza++;
                        else if (utakmica.rezultat === 2) {
                            broj_pobjeda++;
                            bodovi += 3;
                        }
                        else {
                            broj_remija++;
                            bodovi++;
                        }
                        gol_razlika += (utakmica.gol2 - utakmica.gol1)
                        odigrani_mecevi++;
                    }
                } else continue
            }
            tim.broj_pobjeda = broj_pobjeda;
            tim.broj_poraza = broj_poraza;
            tim.broj_remija = broj_remija;
            tim.gol_razlika = gol_razlika;
            tim.odigrani_mecevi = odigrani_mecevi;
            tim.bodovi = bodovi;
        }
        res.status(200);
        return res.json(timovi);

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;