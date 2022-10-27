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
    HStack
} from '@chakra-ui/react';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../components/Navbar";
import { json, useNavigate } from "react-router-dom";
import { FaComment, FaLock, FaInternetExplorer } from "react-icons/fa";

const backendConnection = "http://localhost:5000";

const PregledUtakmica = () => {
    // kod za dohvat svih utakmica
    let [utakmice, setUtakmice] = useState([]);

    const getUtakmice = async () => {
        try {
            const response = await fetch(backendConnection + "/home/utakmice",
                {
                    method: "GET",
                    mode: "cors",
                    headers: {
                        "Content-type": "application/json"
                    }
                });
            const jsonData = await response.json();
            setUtakmice(jsonData);
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        getUtakmice();
    }, []);

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

    return (
        <>
            <Navbar />
            <br />
            <br />
            <Center>
                <Table variant="striped" size="md" colorScheme="blue" w="50%">
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
                            <Th>

                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {Object.values(utakmice).map((utakmica) => {
                            return (
                                <>
                                    <Tr>
                                        <Td>{utakmica.naziv_tima1}</Td>
                                        <Td>{utakmica.naziv_tima2}</Td>
                                        <Td>{utakmica.gol1} - {utakmica.gol2}</Td>
                                        <Td>{datumTranslate(utakmica.datum_utakmice)}</Td>
                                        <Td>{utakmica.broj_komentara}</Td>
                                        <Td><Link href={"/utakmica/" + utakmica.id_utakmice}>Idi na</Link></Td>
                                    </Tr></>
                            )
                        })}
                    </Tbody>

                </Table>
            </Center>
        </>
    )
};

export default PregledUtakmica