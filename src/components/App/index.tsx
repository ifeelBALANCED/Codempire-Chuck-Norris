import React, {FC} from "react"
import {
    ChakraProvider,
    theme, Flex, Container,
} from "@chakra-ui/react"
import {Header} from "../Header";
import {Title} from "../Title";
import {Categories} from "../Categories";
import {Joke} from "../Joke";

export const App: FC = () => (
    <ChakraProvider theme={theme}>
        <Flex flexDir="column" height="100vh">
            <Header/>
            <Container maxW="1120px">
                <Title title="Categories"/>
                <Categories/>
                <Joke/>
            </Container>
        </Flex>
    </ChakraProvider>
)
