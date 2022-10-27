import React, { Fragment, useEffect, useState, useHistory } from "react";
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    Link,
    Avatar,
    FormControl,
    FormHelperText,
    InputRightElement,
    Center,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    HStack,
    VStack
} from '@chakra-ui/react';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../components/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { FaComment, FaLock, FaInternetExplorer } from "react-icons/fa";

const backendConnection = "http://localhost:5000";

const Utakmica = () => {
    const id_utakmice = useParams().id_utakmice;
    let [utakmica, setUtakmica] = useState([]);
    let [golovi, setGolovi] = useState({
        gol1: null,
        gol2: null
    });
    let [komentari, setKomentari] = useState([]);

    // axios za dohvat utakmice i komentara
    const getUtakmica = async () => {
        try {
            const response = await fetch(backendConnection + "/home/utakmica/" + id_utakmice,
                {
                    method: "GET",
                    mode: "cors",
                    headers: {
                        "Content-type": "application/json"
                    }
                });
            const jsonData = await response.json();
            console.log(jsonData);
            setUtakmica(jsonData[0]);

        } catch (err) {
            console.log(err);
        }
    };


    // kod za dodavanje rezultata utakmice, TO DO napravit prikaz
    const updateUtakmica = async () => {
        try {
            // id_utakmice ili idUtakmice - promijeniti
            const body = { id_utakmice, gol1: golovi.gol1, gol2: golovi.gol2 }
            const response = await fetch(backendConnection + "/home/utakmica/edit",
                {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(body)
                });
            const jsonData = await response.json();
        } catch (err) {
            console.log(err.message);
        }

    };

    const getKomentari = async () => {
        try {
            // id_utakmice ili idUtakmice - promijeniti
            const response = await fetch(backendConnection + "/komentar/" + id_utakmice,
                {
                    method: "GET",
                    mode: "cors",
                    headers: {
                        "Content-type": "application/json"
                    },
                });
            const jsonData = await response.json();
            setKomentari(jsonData);
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        getUtakmica();
    }, []);
    useEffect(() => {
        getKomentari();
    }, []);

    // TO DO edit i delete
    const editKomentar = async (id_komentara, tekst, email) => {
        try {
            const body = { id_komentara, tekst, email };
            const response = await fetch(backendConnection + "/komentar/edit",
                {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(body)
                });
            const jsonData = await response.json();
            // handle change

        } catch (err) {
            console.log(err);

        }

    };

    const deleteKomentar = async (id_komentara) => {
        try {
            const response = await fetch(backendConnection + "/komentar/delete/" + id_komentara,
                {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-type": "application/json"
                    }
                });
            const jsonData = await response.json();
            // handle change

        } catch (err) {
            console.log(err);
        }

    };

    function datumTranslate(param) {
        try {
            let [date, time] = param.split('T')
            let [year, month, day] = date.split('-')
            let [hour, minute, second] = time.split(':')
            let secondFormatted = second.split(".")[0]

            return `${day}.${month}.${year} ${hour}:${minute}:${secondFormatted}`;
        } catch (err) {
            return param
        }

    }

    // TO DO kod za dodavanje novog komentara
    const addKomentar = async (email, tekst) => {
        try {
            const body = { id_utakmice, email, tekst }
            const response = await fetch(backendConnection + "/komentar/add",
                {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(body)
                })
            const jsonData = await response.json();
            // handle change

        } catch (err) {
            console.log(err);
        }

    };

    return (
        <>
            <Navbar />
            <br />
            <br />

            <Center>
                <VStack>
                    <Table variant="striped" size="lg" colorScheme="blue">
                        <Thead>
                            <Tr>
                                <Th>
                                    Prvi tim
                                </Th>
                                <Th>
                                    Drugi tim
                                </Th>
                                <Th>
                                    Rezultat
                                </Th>
                                <Th>
                                    Vrijeme utakmice
                                </Th>
                                <Th>
                                    Komentari
                                </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td fontWeight="bold">
                                    {utakmica.naziv_tima1}
                                </Td>
                                <Td fontWeight="bold">
                                    {utakmica.naziv_tima2}
                                </Td>
                                <Td>
                                    {utakmica.gol1} - {utakmica.gol2}
                                </Td>
                                <Td>
                                    {datumTranslate(utakmica.datum_utakmice)}
                                </Td>
                                <Td>
                                    {utakmica.broj_komentara}
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <br />
                    <HStack><Button colorScheme="blue">Promijeni rezultat</Button>
                        <Button>Dodaj komentar</Button></HStack>
                    <br />
                    <br />
                    <Table variant="striped" size="md" colorScheme="gray" w="90%">
                        <Thead>
                            <Tr>
                                <Th>
                                    Osoba
                                </Th>
                                <Th>
                                    Tekst
                                </Th>
                                <Th>
                                    Vrijeme
                                </Th>
                                <Th>

                                </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {Object.values(komentari).map((komentar) => {
                                return (
                                    <>
                                        <Tr>
                                            <Td>{komentar.email}</Td>
                                            <Td>{komentar.tekst}</Td>
                                            <Td>{datumTranslate(komentar.vrijeme)}</Td>
                                            <Td>{//TO DO edit and delete
                                            }</Td>
                                        </Tr></>
                                )
                            })}
                        </Tbody>
                    </Table>
                </VStack>
            </Center>
        </>
    )
};

export default Utakmica;