import React from 'react';
import { actors } from '../data';

const Actors = () => {

  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(Actor)}
    </div>
  );
};

const Actor = ({ name, movies }) => {
  return (
    <div key={name}>
      <h2>Name: {name}</h2>
      <h3>Movies:</h3>
      <ul>
        {movies.map((movie, index) => <li key={index}>{movie}</li>)}
      </ul> 
    </div>
  )
}

export default Actors;
