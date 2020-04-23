import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(Movie)}
    </div>
  );
};

const Movie = ({ title, time, genres }) => {
  return (
    <div key={title}>
      <h2>Name: {title}</h2>
      <p>Time: {time}</p>
      <p>Genres:</p>
      <ul>
        {genres.map((genre, index) => <li key={index}>{genre}</li>)}
      </ul>
    </div>
    
  )
}

export default Movies;
