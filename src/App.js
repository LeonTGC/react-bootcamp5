import { useState } from "react"

import BbcSport from "./components/BbcSport"
import Display from "./components/Display"
import Person from "./components/Person"
import Form from './components/Form'

const App = () => {


  const [count, setCount] = useState(0)
  const [error, setError] = useState(false)


  const [persons, setPersons] = useState([])
  const [userName, setUserName] = useState('')
  const [userAge, setUserAge] = useState('')

  let deleteHandler = (index) => {
    // make copy
    let updatedArray = [...persons]
    // change it
    updatedArray.splice(index, 1)
    // update state
    setPersons(updatedArray)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPersons([...persons, { name: userName, age: parseInt(userAge) }])
    setUserName('')
    setUserAge('')
  }



  if (error) {
    return <h1>there has been an error...soz</h1>
  }
  return (
    <div>
      <h1>my sight</h1>
      <h2>i have really good sight</h2>

      <Form 
        deleteHandler={deleteHandler}
        handleSubmit={handleSubmit}
        userName={userName}
        userAge={userAge}
        setUserName={setUserName}
        setUserAge={setUserAge}
      />






      {/* <div>
        <button onClick={() => setCount(count - 1)}>-</button>
 
        <button onClick={() => setCount(count + 1)}>+</button>
      </div> */}
      {/* {persons.map((person, index) => {
        return <Person 
                deleteHandler={deleteHandler}
                index={index} 
                name={person.name} 
                age={person.age} 
                key={index}
              />
      })} */}
      {/* <BbcSport /> */}
      {/* <Display /> */}
    </div>
  )
}

export default App