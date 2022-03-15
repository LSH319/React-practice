import React, { useEffect, useState } from 'react';
import Movie from './components/Movie';
import movie from "./Typing";

function App() {
  const [loading, setLoaning] = useState(true);
  const [movies, setMovies] = useState<movie[]>([]);

  const getMovies= async() => {
    const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year');
    const json = await response.json();
    setMovies(json.data.movies);
    setLoaning(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? 
        (<h1>Loading...</h1>) :
        (
          <div>
            {movies.map((movie) => (
              <Movie {...movie}/>
            ))}
          </div>
        )
      }
    </div>
  )
}

export default App;
