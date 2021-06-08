import React, {FC} from 'react';
import {Center, Heading} from "@chakra-ui/react";
import {headStyles} from "./helpers";

type TitleProps = {
    title: string
}

export const Title: FC<TitleProps> = ({title}) => {
    return (
        <Heading as="h1" style={headStyles}>
            <Center>{title}</Center>
        </Heading>
    );
};


