import {Link} from "react-router-dom"

function CategoryItem(props) {
  const {strCategoryThumb, strCategory, strCategoryDescription} = props
  return(
    <li className="category-item">
      <div>
        <img src={strCategoryThumb} height="240" alt={strCategory} />
      </div>
      <div className="category__body">
        <p className="category__title">{strCategory}</p>
        <p>{strCategoryDescription.slice(0, 60)}...</p>
      </div>
      <div className="category__action">
        <Link to={`/category/${strCategory}`} className="btn">Watch Category</Link>
      </div>
    </li>
  )
}
export default CategoryItem