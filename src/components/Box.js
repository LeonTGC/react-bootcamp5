import { useState } from "react"

const Box = ({ text }) => {
    const [clicked, setClicked] = useState(false)

    const clicker = () => {
        setTimeout(() => {
            setClicked(!clicked)
        }, 2000)
    }
    return (
        <div style={clicked ? { backgroundColor: "red" } :{ backgroundColor: "green" } }>
            <p>{text}</p>
            <button onClick={clicker}>change</button>
        </div>
    )
}

export default Box