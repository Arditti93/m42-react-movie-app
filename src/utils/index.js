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
        if ('error' in data) {
            setter(data.error)
        } else{
            setter(data.username)
        }
    } catch (error) {
        console.log(error)
    }
}



