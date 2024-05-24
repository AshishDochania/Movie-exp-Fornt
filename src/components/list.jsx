import React from 'react';

function MovieList({ movies, onSelectMovie }){
    
  return (
    <div className='list-cont'>
      {movies && movies.map(movie => (
        <div className="list-item" key={movie.imdbID} onClick={() => onSelectMovie(movie.imdbID)}>
          <img height="400" width="250" src={movie.Poster} alt={`${movie.Title} poster`} />
          <h3 className='des'>{movie.Title} ({movie.Year})</h3>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
