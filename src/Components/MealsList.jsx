import Loader from "./Loader"
import MealsItem from "./MealsItem"

function MealsList({meals = []}) {
  return(
    <ul className="category-list">
      {
        meals.length && meals.map(meal => (
          <MealsItem key={meal.idMeal} {...meal}/>
        ))
      }
    </ul>
  )
}
export default MealsList