export const writeCookie = (key, value, days) => {
    let date = new Date ()
    days = days || 365 

    date.setDate(date.getDate() + days);

    let cookie = document.cookie = key + "=" + value + "; expires=" + date.toGMTString() + "; path=/";

    return cookie
}

// export const getCookie = (cookieName) => {
//     let name = cookieName + "="
//     //jwt=
//     let decodedCookies = decodeURIComponent(document.cookie)
//     console.log(decodedCookies)
//     //decod cookies from browser incase special characters are stored in there
//     let splitCookies = decodedCookies.split(';')
//     //split cookies at semi colons 
//     for (let i = 0; i < splitCookies.length; i ++){
//         let cookie = splitCookies[i]
//         //loop through each cookies value that were split at the semi colon
//         while (cookie.charAt(0) === ' '){
//             cookie = cookie.substring(1)
//         }
//         if (cookie.indexOf(name) === 0){
//             return cookie.substring(name.length, cookie.length)
//         }
//         return false
//     }
// } 

export const getCookie = (cookieName) =>{
    // Construct a RegExp object as to include the variable name
    const re = new RegExp(`(?<=${cookieName}=)[^;]*`);
    console.log(re)
    try{
        let cookie = document.cookie.match(re)[0];	// Will raise TypeError if cookie is not found
        console.log(cookie)
        return cookie
    }catch{
        console.log("this-cookie-doesn't-exist")
        return false
    }
}
  
