import React, { useEffect, useContext } from 'react'
import './Random.scss'
import { myContext } from './context'

const Random = () => {

  const { fetchRandom, randomMeal } = useContext(myContext)

  useEffect(() => {
    fetchRandom();
  }, [fetchRandom])


  const ingredients = [];
  randomMeal.map(meal => { 
  for (const property in meal) {
      if (meal[property] === null || meal[property] === "" || meal[property] === " ")
        delete meal[property];
  }
  for (const property in meal) {
    if (property.includes("Ingredient")) {
      const matches = property.match(/(\d+)/);
      if (!matches) continue;
      const ingredientNum = matches[0];
      ingredients.push({
        ingredient: meal[`strIngredient${ingredientNum}`],
        measure: meal[`strMeasure${ingredientNum}`],
      });
    }
  }
})

  return (
    <div className='random'>
      {randomMeal.map(meal => (
        <div key={meal.idMeal} className="random-grid">
          <div className='random-grid-controls'>
            <img src={meal.strMealThumb} alt='#' />
            <button onClick={fetchRandom}>Generate another meal</button>
          </div>
          <div className='random-grid-ingredients'>
          <h3>Ingredients</h3>
            <ul>
            {ingredients? (
              ingredients.map(ing => <li>{ing.ingredient} - {ing.measure}</li>)
            ) : (<h4>Ingredients not available</h4>)}
            </ul>
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