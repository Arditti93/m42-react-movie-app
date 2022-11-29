import React from "react"
import {useState} from "react"
import { createUser } from "../utils"

const CreateUser = ({setter}) => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const submitHandler = async (event) => {
        event.preventDefault()
        console.log(username)
        console.log(email)
        console.log(password)
        await createUser(username, email, password, setter)
    }

    return (
        <form onSubmit={submitHandler}>
            <label>Username:
                <input onChange={(event) => setUsername(event.target.value)} />
            </label>
            <br></br>
            <label>Email:
                <input onChange={(event) => setEmail(event.target.value)} />
            </label>
            <br></br>
            <label>Password:
                <input onChange={(event) => setPassword(event.target.value)} />
            </label>
            <br></br>
            <button type="submit">Click here to create an account</button>
        </form>
    )

}

export default CreateUser
