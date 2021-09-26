import CategoryItem from "./CategoryItem"

function CategoryList({category = []}) {
  return(
    <ul className="category-list">
      {
        category.map(item=> (
          <CategoryItem key={item.idCategory} {...item}/>
        ))
      }
    </ul>
  )
}
export default CategoryList