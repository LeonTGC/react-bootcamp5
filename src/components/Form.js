import { useState } from "react"

const Form = ({
    handleSubmit,
    userName,
    userAge,
    setUserName,
    setUserAge }) => {

    return (
        <form onSubmit={handleSubmit}>
            <h1>{userName}</h1>
            <label>
                enter your name:
                <input
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                    type='text'
                />
            </label>
            <label>
                enter your age
                <input
                    onChange={(e) => setUserAge(e.target.value)}
                    value={userAge}
                    type="text"
                />
            </label>
            <input type="submit" />
        </form>
    )
}

export default Form