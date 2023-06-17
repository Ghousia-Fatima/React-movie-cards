import React from 'react';
import './App.css';
import movies from './components/Movie';
import Card from './components/Card'

function App(){

  return(
    <div>
    <h2>Movie Mania</h2>{
      movies.map((movie,i)=>(
        <Card movie={movie} key={i}/>
      ))
    }
    </div>
  )
}

export default App;
