import Pet from "./Pet"

// props = {
//     name: 'dave',
//     age: '29'
// }

const Person = ({ name, age, deleteHandler, index }) => {
    return (
        <div>
            <h1 onClick={() => deleteHandler(index)}>my name is {name} I am {age} years old</h1>
            {/* <Pet type={type} petName={petName}/> */}
        </div>
    )
}

export default Person