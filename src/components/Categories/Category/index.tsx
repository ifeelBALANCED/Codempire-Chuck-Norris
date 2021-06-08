import React, {FC} from 'react';
import {Box} from "@chakra-ui/react";
import {CategoryType, jokeFX} from "./models";

type CategoryProps = {c: CategoryType}
export const Category: FC<CategoryProps> = ({c}) => {
    return (
        <Box
            className="category"
            onClick={() => jokeFX(c)}
            key={c.toString()}
        >
            <Box className="category-title">
                {c}
            </Box>
        </Box>
    )
};

