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
    Center
} from '@chakra-ui/react';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { FaUserAlt, FaLock } from "react-icons/fa";

const Home = () => {
    // napisat neku bolju glupost

    return (
        <Flex direction="column">
            <Navbar />
            <br />
            <Center>
                <Heading>Dobro došli na stranicu za pregled nogometnih rezultata</Heading>
            </Center>

        </Flex>

    )
};

export default Home;