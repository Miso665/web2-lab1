CREATE TABLE tim (
    id_tima INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
    naziv_tima VARCHAR(40) NOT NULL,
    PRIMARY KEY(id_tima)
)

CREATE TABLE utakmica (
    id_utakmice INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
    id_tima1 INTEGER NOT NULL,
    id_tima2 INTEGER NOT NULL,
    datum_utakmice TIMESTAMP NOT NULL,
    gol1 INTEGER,
    gol2 INTEGER,
    rezultat INTEGER,
    PRIMARY KEY(id_utakmice),
    FOREIGN KEY(id_tima1) REFERENCES tim(id_tima),
    FOREIGN KEY(id_tima2) REFERENCES tim(id_tima)
)

CREATE TABLE komentar (
    id_komentara INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
    id_utakmice INTEGER NOT NULL,
    tekst VARCHAR(500) NOT NULL,
    email VARCHAR(40) NOT NULL,
    vrijeme TIMESTAMP NOT NULL,
    PRIMARY KEY(id_komentara),
    FOREIGN KEY(id_utakmice) REFERENCES utakmica(id_utakmice)
)

'''CREATE TABLE rezultat (
    id_rezultata INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
    id_utakmice INTEGER NOT NULL,
    gol1 INTEGER,
    gol2 INTEGER,
    PRIMARY KEY(id_utakmice),
    FOREIGN KEY(id_utakmice) REFERENCES utakmica(id_utakmice)
)'''

INSERT INTO tim (naziv_tima)
VALUES 
    ('GNK Dinamo Zagreb'),
    ('HNK Hajduk Split'),
    ('NK Osijek'),
    ('NK Slaven Belupo'),
    ('NK Varaždin'),
    ('NK Istra'),
    ('HNK Šibenik'),
    ('HNK Rijeka'),
    ('NK Lokomotiva Zagreb'),
    ('NK Gorica')

INSERT INTO utakmica (id_tima1, id_tima2, datum_utakmice, gol1, gol2, rezultat)
VALUES 
    (1, 2, '2022-10-08 20:00:00', 0, 0, 0),
    (2, 3, '2022-10-10 18:00:00', 3, 0, 1),
    (3, 4, '2022-10-30 20:00:00', 4, 2, 1),
    (4, 5, '2022-10-15 18:00:00', 1, 1, 0),
    (5, 6, '2022-10-18 20:00:00', 0, 2, 2),
    (6, 7, '2022-10-19 18:00:00', 1, 3, 2),
    (7, 8, '2022-10-20 20:00:00', 3, 3, 0),
    (8, 9, '2022-10-22 18:00:00', 5, 0, 1),
    (9, 10, '2022-10-22 20:00:00', 0, 1, 2)

INSERT INTO utakmica (id_tima1, id_tima2, datum_utakmice)
VALUES
    (10, 1, '2022-10-25 20:00:00'),
    (2, 4, '2022-10-27 18:00:00'),
    (5, 9, '2022-10-29 20:00:00')

'''INSERT INTO table rezultat (id_utakmice, gol1, gol2)
VALUES (
    1, 0, 0,
    2, 3, 0,
    3, 4, 2,
    4, 1, 1,
    5, 0, 2,
    6, 1, 3,
    7, 3, 3,
    8, 5, 0,
    9, 0, 1,
    10, 2, 1,
)'''