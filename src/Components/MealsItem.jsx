function MealsItem(props) {
  const {strMealThumb, strMeal} = props
  return(
    <li className="category-item">
      <div>
        <img className="meal-img" width="350" height="350" src={strMealThumb} alt={strMeal} />
      </div>
      <div className="category__body">
        <p><b>{strMeal}</b></p>
      </div>
    </li>
  )
}
export default MealsItem