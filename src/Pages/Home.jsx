import {useState, useEffect} from 'react'
import {getAllCategories} from "../api"

import CategoryList from "../Components/CategoryList"
import Loader from "../Components/Loader"

function Home() {
  const [category, setCategory] = useState([])

  useEffect(()=> {
    getAllCategories().then(data=> setCategory(data.categories))
  },[])
  
  return(
    <div className="container">
      {
        category.length ? <CategoryList category={category}/> : <Loader />
      }
    </div>
  )
}
export default Home