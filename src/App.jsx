import React from "react";
import { useEffect, useState } from "react";
import MovieCard from "./componets/MovieCard";
import Login from "./componets/Login";
import ReadUsers from "./componets/ReadUsers";
import UpdateUser from "./componets/UpdateUser";
import DeleteUser from "./componets/DeleteUser";
import CreateUser from "./componets/createUser";
import { getCookie } from "./common";
import { findUser } from "./utils";

const API_URL = process.env.REACT_APP_API_URL

const App = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [movies, setMovies] = useState([])

  const [user, setUser] = useState()

  const searchMovies = async (title) => {
    const req = await fetch(`${API_URL}&s=${title}`)
    const res = await req.json()
    setMovies(res.Search)
    // console.log(res.Search)
  }

  useEffect (()=>{
    // searchMovies("Batman")
    let cookie = getCookie('jwt_token')
    if (cookie !== false){
      loginWithToken(cookie)
    }
  }, [])

  const loginWithToken = async(cookie) => {
    const user = await findUser(cookie)
    setUser(user)
  }

  return (
    <div className="app">
      <Login setter={setUser} />
      {user ?
        <div className="user">
          <h2>Hello welcome {user} you have logged in </h2>
          <UpdateUser user={user} />
          <DeleteUser user={user} />
          <CreateUser setter={setUser} />
          <ReadUsers />

          <h1>My movie app</h1>

          <div>
            <input 
              placeholder='search for a film' 
              value={searchTerm} onChange={(event) => setSearchTerm(event.target.value) }
            >
            </input>
            <button 
              onClick={() => searchMovies(searchTerm)}
              >
              Search
            </button>
          </div>
          { movies?.length > 0
            // if moives array length is greater than zero
            ? (
              <div className="container">
                {movies.map((movie) => (
                  <MovieCard movie={movie} />
                ))}
              </div>
            // else movies array is less than zero
            ) : (
              <div>
                <h2>No movies found</h2>
              </div>
            )
          }
        </div>
        :
        <h2>Please log in</h2>
      }
    </div>
  );
};

export default App;
