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
import { useNavigate } from "react-router-dom";
import { FaComment, FaLock, FaInternetExplorer } from "react-icons/fa";

const PregledUtakmica = () => {
    // kod za dohvat svih utakmica

    // kod za mijenjanje rezultata utakmice (upis rezultata)
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
                                Vrijeme utakmice
                            </Th>
                            <Th>
                                Rezultat
                            </Th>
                            <Th>
                                Komentari
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
                                <HStack><FaComment /> 2</HStack>
                            </Td>
                        </Tr>
                    </Tbody>

                </Table>
            </Center>
        </>
    )
};

export default PregledUtakmica