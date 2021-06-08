import React, {FC, useEffect} from 'react';
import {Flex, Image, Text} from "@chakra-ui/react";
import {$requestGetStatus, requestFx} from "./models";
import {useStore} from "effector-react";
import {Loader} from "../Spinner";
import {ErrorMessage} from "../Error";

type LogoTypes = string | undefined
export const Logo: FC = () => {
    const {logo, loading, error} = useStore($requestGetStatus)
    useEffect(() => {
        requestFx()
    }, []);
    if (loading) {
        return <Loader size="lg"/>
    }
    if (error) {
        return <ErrorMessage error={error}/>
    }
    return (
        <Flex align="center">
            <Image
                boxSize="43px"
                objectFit="cover"
                src={logo as LogoTypes}
                alt="Chuck Norris"
                mr="10px"
            />
            <Text
                color="#FFF"
                fontWeight={800}
                fontSize={16}
                fontFamily="Raleway"
            >
                Chuck Norris
            </Text>
        </Flex>
    );
};


