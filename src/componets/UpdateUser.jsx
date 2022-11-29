import React from 'react'
import { useState } from 'react'
import {updateUser} from '../utils'

const UpdateUser = ({user}) => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const updateUsername = async (event) =>{
        event.preventDefault()
        await updateUser(user, "username", username)
    }

    const updateEmail = async (event) =>{
        event.preventDefault()
        await updateUser(user, "email", email)
    }

    const updatePassword = async (event) =>{
        event.preventDefault()
        await updateUser(user, "password", password)
    }

    return (
        <>
            <div className='container'>
                <form onSubmit={updateUsername}>
                    <label>Update your username:
                        <input onChange={(event) => setUsername(event.target.value)}>
                        </input>
                    </label>
                    <button type="submit">Update your username</button>
                </form>

                <form onSubmit={updateEmail}>
                    <label>Update your Email:
                        <input onChange={(event) => setEmail(event.target.value)}>
                        </input>
                    </label>
                    <button type="submit">Update your Email</button>
                </form>

                <form onSubmit={updatePassword}>
                    <label>Update your password:
                        <input onChange={(event) => setPassword(event.target.value)}>
                        </input>
                    </label>
                    <button type="submit">Update your username</button>
                </form>
            </div>
        </>
    ) 

}

export default UpdateUser