import React, { useEffect, useContext } from 'react'
import './Random.scss'
import { myContext } from './context'

const Random = () => {

  const { fetchRandom, randomMeal } = useContext(myContext)

  useEffect(() => {
    fetchRandom();
  }, [fetchRandom])

  return (
    <div className='random'>
      {randomMeal.map(meal => (
        <div key={meal.idMeal} className="random-grid">
          <div className='random-grid-controls'>
            <img src={meal.strMealThumb} alt='#' />
            <button onClick={fetchRandom}>Generate another meal</button>
          </div>
          <div className='random-grid-instructions'>
            <h3>Instructions</h3>
            <p>{meal.strInstructions}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Random