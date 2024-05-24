import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/page1';
import MovieList from './components/list';
import MovieDetails from './components/details';

function App(){
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [val,changeval]=useState(true);

  async function handleSearch(query) {
    const response = await axios.get(`http://localhost:5000/api/movies?title=${query}`);
    setMovies(response.data.Search);
  }

  function handleSelectMovie(imdbID) {
    setSelectedMovie(()=>(imdbID));
    changeval(true);
  }

  function handle(){
    changeval(false);
  }

  return (
    <div className="body">
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
      {val && (selectedMovie && <MovieDetails selectedMovie={selectedMovie} func={handle}/>)}
    </div>
  );
};

export default App;

