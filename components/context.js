import React, { createContext, useCallback, useState } from "react";
import axios from 'axios';

export const myContext = createContext();

export const AppContext = ({ children }) => {
    const [randomMeal, setRandomMeal] = useState([]);
    const [meals, setMeals] = useState([]);
    const [categories, setCategories] = useState([]);

    const searchMeals = useCallback((searchTerm) => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
            .then(res => {
                setMeals(res.data.meals)
            })
    },[])

    const fetchCategory = useCallback(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            .then(res => {
                setCategories(res.data.categories);
            })
    }, [])

    const fetchRandom = useCallback(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
            .then(res => {
                setRandomMeal(res.data.meals);
            })
    }, [])


    return (
        <myContext.Provider 
        value={{searchMeals, meals, fetchCategory, categories, fetchRandom, randomMeal}}>
            {children}
        </myContext.Provider>
    );
};
