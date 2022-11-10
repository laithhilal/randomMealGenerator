import React, { useState, useContext, useCallback } from 'react'
import './Search.scss'
import { myContext } from './context';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const { searchMeals, meals } = useContext(myContext);

  const fetchMeals = useCallback(() => {
    searchMeals(searchTerm);
  }, [searchTerm, searchMeals])

  return (
    <div className='search'>
        <div className='search-search'>
          <input type='text' 
          placeholder='Search a meal...' 
          value={searchTerm} 
          onChange={e => setSearchTerm(e.target.value)}/>
          <button onClick={fetchMeals}>Search</button>
        </div>
        <div className='search-grid'>
          {meals? (
            meals.map(meal => <div className='search-meal' key={meal.idMeal}>
                <img src={meal.strMealThumb} alt='#' />
                <h4>{meal.strMeal}</h4>
            </div>)
          ) : (
          <h2>No meals found!!</h2>
          )} 
        </div>
    </div>
  )
}

export default Search