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

const Tablica = () => {
    // kod za dohvat tablice poretka
    // sortirat tablicu

    return (
        <>
            <Navbar />
            <br />
            <br />
            <Center>
                <Table variant="striped" size="md" colorScheme="blue" w="70%">
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
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>
                                Data 1
                            </Td>
                            <Td>
                                Data 2
                            </Td>
                            <Td>
                                Data 3
                            </Td>
                            <Td>
                                Data 4
                            </Td>
                            <Td>
                                Data 4
                            </Td>
                            <Td>
                                Data 4
                            </Td>
                        </Tr>
                    </Tbody>

                </Table>
            </Center>
        </>
    )
};

export default Tablica