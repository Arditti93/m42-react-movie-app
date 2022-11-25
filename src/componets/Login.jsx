import React from "react"
import {useState} from "react"

const Login = ({setter}) => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const submitHandler = async (event) => {
        event.preventDefault()
        console.log(username)
        console.log(email)
        console.log(password)
    }

    return (
        <form onSubmit={submitHandler}>
            <label>Username:
                <input onChange={(event) => setUsername(event.target.value)} />
            </label>
            <label>Email:
                <input onChange={(event) => setEmail(event.target.value)} />
            </label>
            <label>Password:
                <input onChange={(event) => setPassword(event.target.value)} />
            </label>
            <button type="submit">Click here to login</button>
        </form>
    )

}

export default Login
