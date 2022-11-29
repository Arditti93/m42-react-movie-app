import { writeCookie } from "../common"

export const loginUser = async (username, email, password, setter) => {
    try {
        const response = await fetch("http://localhost:5001/loginUser", {
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
        const response = await fetch("http://localhost:5001/loginUser", {
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

//user manaully logs in 
// genertate a cookie - store the jwt token value in cookie
//getCookie - check exists . 
//findUser fetch function -

