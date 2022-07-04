import { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

import './Create.css'

export default function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewingredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientInput = useRef(null)
  const ingForm = useRef(null)

  const { postData, data, error } = useFetch("http://localhost:3001/recipes", "POST")

  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    postData({ title, ingredients, method, cookingTime: cookingTime + "minutes" })
    console.log(data, error)
  }

  useEffect(() => {
    if (data) {
      history.push('/')
    }
  }, [data])

  const addIngredient = (e) => {
    e.preventDefault()
    const ing = newIngredient.trim()
    if (ing && !ingredients.includes(ing)) {
      setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    setNewingredient('')
    ingredientInput.current.focus()
  }

  return (
    <div className='create'>
      <h2 className='page-title'>Add new Recipe</h2>
      <form onSubmit={handleSubmit} ref={ingForm}>

        <label>
          <span>Recipe Title</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe ingredient</span>
          <div className='ingredients'>
            <input type="text"
              onChange={e => setNewingredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button onClick={addIngredient} className='btn'>Add</button>
            <p>Current setIngredients {ingredients && ingredients.map((ing, index) => (
              <em key={index}>{ing}, </em>
            ))}</p>
          </div>
        </label>

        <label>
          <span>Recipe Methods</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>

        <label>
          <span>Cooking Time</span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>

        <button className='btn'>Submit</button>

      </form>
    </div>
  )
}
