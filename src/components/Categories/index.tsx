import React, {useEffect} from 'react';
import {useStore} from "effector-react";
import {$categoriesGetStatus, categoriesFx} from "./models";
import {Category} from "./Category";
import {Flex} from "@chakra-ui/react";
import '../../index.css'


export const Categories = () => {
    const {categories} = useStore($categoriesGetStatus)
    useEffect(() => {
        categoriesFx()
    }, []);
    const newCategories = [...categories, 'random']
    const allCategories = newCategories.map((c) => <Category key={c} c={c} />)
    return (
        <Flex className="category-wrapper">
            {allCategories}
        </Flex>
    )
}

