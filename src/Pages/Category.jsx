import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import {getFilterCategory} from "../api"
import Loader from '../Components/Loader'
import MealsList from '../Components/MealsList'

function Category() {
  const {name} = useParams()

  const [meals, setMeals] = useState([])

  useEffect(()=> {
    getFilterCategory(name)
    .then(data => setMeals(data.meals))
  }, [])

  console.log(meals);
  
  return(
    <div className="container">
      {
        meals.length ? <MealsList meals={meals}/> : <Loader />
      }
    </div>
  )
}
export default Category