import logo from './logo.svg';
import './App.css';
import React,{ useEffect, useState } from 'react';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
/*key
4b03d1e3
OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=4b03d1e3
*/
const apiUrl="http://www.omdbapi.com/?i=tt3896198&apikey=4b03d1e3";
function App() {
  const [movies,setMovies]=useState([]);
  const [searchTerm,setSearchTerm]=useState("");
  const searchMovies=async (title)=>{
    const response=await fetch(`${apiUrl}&s=${title}`);
    const data= await response.json();
    setMovies(data.Search);
  };
  useEffect(()=>{searchMovies("Batman");},[]);
  return (
    <div className="app">
      <h1 >
        MovieLand
      </h1>
      <div className="search" >
        <input 
          type="text" 
          value={searchTerm}
          placeholder='Search f0r movies'
          onChange={(e)=>{setSearchTerm(e.target.value)}}
        />
        <img 
          src={SearchIcon}
          onClick={(e)=>{searchMovies(searchTerm)}}
        />
      </div>
      {
        movies?.length>0 ?
        (
          <div className="container">
            {
              movies.map((movie)=>
              (
                <MovieCard movie={movie}/>
              ))
            }
          </div>
        ):
        (
          <div className="empty">
            <h2>
              No Movies Found
            </h2>
          </div>
        )
      }
      
    </div>
  );
}

export default App;
