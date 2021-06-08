import React, {useEffect} from 'react';
import {Box, Image} from "@chakra-ui/react";
import {useStore} from "effector-react";
import svgChuck from "../../assets/images/chuck.svg"
import {$getJokeStatus, jokeFX} from "../Categories/Category/models";
import {Loader} from "../Spinner";
import '../../index.css'

export const Joke = () => {
    const {loading, joke} = useStore($getJokeStatus)

    useEffect(() => {
        jokeFX('random')
    }, []);

    return (
        <Box className="wrapper">
            <Box className="joke">
                {loading ? <Loader size="lg"/> : joke}
            </Box>
            <Image
                src={svgChuck}
                alt="Chuck in hat"
                className="chuck-hat"
            />
        </Box>
    );
};

