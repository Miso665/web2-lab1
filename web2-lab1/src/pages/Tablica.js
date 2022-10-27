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
    Td
} from '@chakra-ui/react';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { FaUserAlt, FaLock, FaInternetExplorer } from "react-icons/fa";

const backendConnection = "http://localhost:5000";

const Tablica = () => {
    // kod za dohvat tablice poretka
    // sortirat tablicu
    const [tablica, setTablica] = useState([]);

    const getTablica = async () => {
        try {
            const response = await fetch(backendConnection + "/home/tablica",
                {
                    method: "GET",
                    mode: "cors",
                    headers: {
                        "Content-type": "application/json"
                    }
                })
            let jsonData = await response.json();
            jsonData.sort((a, b) => { return b.gol_razlika - a.gol_razlika });
            jsonData.sort((a, b) => { return b.bodovi - a.bodovi });
            setTablica(jsonData);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getTablica();
    }, []);


    return (
        <>
            <Navbar />
            <br />
            <br />
            <Center>
                <Table variant="striped" size="md" colorScheme="blue" w="70%" >
                    <Thead>
                        <Tr>
                            <Th>
                                Naziv tima
                            </Th>
                            <Th>
                                Broj pobjeda
                            </Th>
                            <Th>
                                Broj poraza
                            </Th>
                            <Th>
                                Broj remija
                            </Th>
                            <Th>
                                Gol razlika
                            </Th>
                            <Th>
                                Odigrane utakmice
                            </Th>
                            <Th>
                                Bodovi
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {Object.values(tablica).map((tim) => {
                            return (
                                <>
                                    <Tr>
                                        <Td>{tim.naziv_tima}</Td>
                                        <Td>{tim.broj_pobjeda}</Td>
                                        <Td>{tim.broj_poraza}</Td>
                                        <Td>{tim.broj_remija}</Td>
                                        <Td>{tim.gol_razlika}</Td>
                                        <Td>{tim.odigrani_mecevi}</Td>
                                        <Td>{tim.bodovi}</Td>
                                    </Tr></>
                            )
                        })}
                    </Tbody>

                </Table>
            </Center>
        </>
    )
};

export default Tablica