import { useState } from "react"

const Form = () => {

    return (
        <form onSubmit={handlerSubmit}>
            <h1>{userInput}</h1>
            <label>
                enter your name:
                <input 
                    onChange={() =>{} } 
                    // value={}
                    type='text' 
                />
            </label>
            <label>
                eneter your age
                <input 
                    type="text"
                />
            </label>
            <input type="submit" />
        </form>
    )
}

export default Form