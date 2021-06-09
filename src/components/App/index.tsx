import React, {FC} from "react"
import {
    ChakraProvider,
    theme, Flex, Container,
} from "@chakra-ui/react"
import {Header} from "../Header";
import {Title} from "../Title";
import {Categories} from "../Categories";
import {Joke} from "../Joke";
import {Voicy} from "../Voicy";


export const App: FC = () => (
    <ChakraProvider theme={theme}>
        <Flex flexDir="column" height="100vh">
            <Header/>
            <Container maxW="1120px">
                <Title title="Categories"/>
                <Categories/>
                <Joke/>
                <Voicy/>
            </Container>
        </Flex>
    </ChakraProvider>
)
