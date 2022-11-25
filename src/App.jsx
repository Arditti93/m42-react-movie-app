import React from "react";
import { useEffect, useState } from "react";
// import MovieCard from "./componets/MovieCard";
import Login from "./componets/Login";

const API_URL = process.env.REACT_APP_API_URL

const App = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [movies, setMovies] = useState([])

  const searchMovies = async (title) => {
    const req = await fetch(`${API_URL}&s=${title}`)
    const res = await req.json()
    setMovies(res.Search)
    // console.log(res.Search)
  }

  useEffect (()=>{
    // searchMovies("Batman")
  }, [])

  return (
    <div className="app">
      <Login />
      {/* <h1>My movie app</h1>

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
      } */}
    </div>
  );
};

export default App;
