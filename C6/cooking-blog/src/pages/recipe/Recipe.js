import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"

import "./Recipe.css"

export default function Recipe() {
  const { id } = useParams()
  const url = "http://localhost:3001/recipes/" + id
  console.log(url)
  const { data: recipe, isPending, error } = useFetch(url)

  return (
    <div className="recipe">
      {isPending && <p className="loading">Loading</p>}
      {error && <p className="error">{error.message}</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ingredient, index)=>(
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <p>{recipe.method}</p>
        </>
      )}
    </div>
  )
}
