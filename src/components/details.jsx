import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MovieDetails({ selectedMovie,func }){
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    if (selectedMovie) {
        
      async function fetchMovieDetails() {
        try {
          const response = await axios.get(`http://localhost:5000/api/movie?id=${selectedMovie}`);
          setMovieDetails(response.data);
        } catch (error) {
          console.error('Error fetching movie details:', error);
        }
      }
      fetchMovieDetails();
    }
  }, [selectedMovie]);

  return (
    <div className="details" >
    <button onClick={func}><img src="cross.jpg" height="20" width="20" alt="button" style={{marginLeft:"-4px"}}></img></button>
      {movieDetails && (
        <div style={{display:"flex"}}> 
        <div>
            <img src={movieDetails.Poster} alt={`${movieDetails.Title} poster`} />
            </div>
            <div>
          <h2>{movieDetails.Title}</h2>
          <p>{movieDetails.Year}</p>
          <p>{movieDetails.Plot}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
