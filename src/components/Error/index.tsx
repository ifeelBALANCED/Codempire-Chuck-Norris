import React, {FC} from 'react';
import {Text} from "@chakra-ui/react";

type ErrorProps = { error: Error | null }
export const ErrorMessage: FC<ErrorProps> = ({error}) => {
    return (
        <>
            <Text>
                <b>An error has occurred: {error}</b>
            </Text>
        </>
    );
};

