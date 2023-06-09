
import './App.css';
import {useState} from 'react';
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

function App() {
  const API_KEY = "82134814";

  //State to hold movie data
  const [ movie, setMovie ] = useState(null)
//array distruction - use brackets 

//Function to get movie data

const getMovie = async (searchTerm) => {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${API_KEY}&t=${searchTerm}`
  )
  //parse JSON into js object
  const data = await response.json()
  
  setMovie(data)
}

  return (
   <div className='App' >
    <Form getMovie = {getMovie}/>
    <MovieDisplay movie={movie}/>

   </div>
  );
}

export default App;
