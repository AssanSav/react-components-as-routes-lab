import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(Director)}
    </div>
  );
}

const Director = ({ name, movies }) => {
  return (
    <div key={name}>
      <h2>Name: {name}</h2>
      <h2>Movies:</h2>
      <ul>
        {movies.map((director, index) => <li key={index}>{director}</li>)}
      </ul>
    </div>
  )
}

export default Directors
