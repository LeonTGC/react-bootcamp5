import Pet from "./Pet"

// props = {
//     name: 'dave',
//     age: '29'
// }

const Person = ({ name, age, deleteHandler, index }) => {
    return (
        <div>
            <h1>my name is {name} I am {age} years old</h1>
            <button onClick={() => deleteHandler(index)}>remove</button>
        </div>
    )
}

export default Person