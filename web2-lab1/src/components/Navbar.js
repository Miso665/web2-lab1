import { Flex, Heading, Link, useColorModeValue } from "@chakra-ui/react";
import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export default function Navbar() {
    let navigate = useNavigate();

    return (
        <Flex
            bg={useColorModeValue("blue.300", "gray.800")}
            color={useColorModeValue("black", "white")}
            minH="60px"
            py={{ base: "2" }}
            px={{ base: "4" }}
            borderBottom="1"
            borderStyle={"solid"}
            borderColor={useColorModeValue("gray.200", "gray.900")}
            align="center"
        >
            <Link href="/">
                <Heading>Soccer manager</Heading>
            </Link>
            <Link href="/">
                <Heading as="h4" size="md" ml={10} isTruncated>
                    Početna
                </Heading>
            </Link>
            <Link href="/tablica">
                <Heading as="h4" size="md" ml={10} isTruncated>
                    Tablica
                </Heading>
            </Link>
            <Link href="/utakmice">
                <Heading as="h4" size="md" ml={10} isTruncated>
                    Utakmice
                </Heading>
            </Link>
            <Link href="/nadolazeci">
                <Heading as="h4" size="md" ml={10} isTruncated>
                    Nadolazeći
                </Heading>
            </Link>
            <Link position="absolute" right="3%">
                <Heading as="h4" size="md" ml={10} isTruncated>
                    Odjava
                </Heading>
            </Link>
        </Flex>
    );
};