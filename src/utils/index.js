import { writeCookie } from "../common"

export const loginUser = async (username, email, password, setter) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}loginUser`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "username": username,
                "email": email,
                "password": password
            })
        })
        const data = await response.json()
        setter(data.username)
        
        writeCookie("jwt_token", data.token, 7)

    } catch (error) {
        console.log(error)
    }
} 

export const createUser = async (username, email, password, setter) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}addUser`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "username": username,
                "email": email,
                "password": password
            })
        })
        const data = await response.json()
        setter(data.username)
        writeCookie("jwt_token", data.token, 7)
    } catch (error) {
        console.log(error)
    }
} 

export const findUser = async (cookieValue) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}loginUser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${cookieValue}`
            },
        })
        const data = await response.json()
        return data.username
    } catch (error) {
        console.log(error)
    }
} 

export const readUsers = async () =>{
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}readUsers`, {
            method: 'GET',
            headers: {"Content-type": "application/json"}
        })
        const data = await response.json()
        console.log(data)
        const usernames = data.user.map(users => users.username)
        console.log(usernames)
        return usernames
    } catch (error) {
        console.log(error)
    }
} 

export const updateUser = async(username, key, value) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}updateUser`, {
            method: "PUT",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                "username": username,
                "key": key,
                "value": value
            })
        })
        const data = await response.json()
        console.log(data)

    } catch (error) {
        console.log(error)
    }
} 

export const deleteUser = async(username) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}deleteUser`, {
            method: "DELETE",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                "username": username,
            })
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}



