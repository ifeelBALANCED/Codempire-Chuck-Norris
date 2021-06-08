import React, {FC} from 'react';
import {Container, Flex} from "@chakra-ui/react";
import {Logo} from "../Logo";

export const Header: FC = () => {
    return (
        <Flex h={59} bg="#422ED4" align="center">
            <Container maxW="1120px">
                <Logo />
            </Container>
        </Flex>
    );
};

