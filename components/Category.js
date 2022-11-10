import React, { useEffect, useContext } from 'react'
import { myContext } from './context'
import './Category.scss'
const Category = () => {

  const {fetchCategory, categories}  = useContext(myContext);

  useEffect(() => {
    fetchCategory();
  }, [fetchCategory])

  return (
    <div className='category'>
      {categories.map(category => (
        <div key={category.idCategory}>
          <img src={category.strCategoryThumb} alt='#' />
          <h4>{category.strCategory}</h4>
        </div>
      ))}
    </div>
  )
}

export default Category