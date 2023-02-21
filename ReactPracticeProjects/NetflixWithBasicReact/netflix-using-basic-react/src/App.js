import BannerPart from "./components/heading/BannerPart";
import "./App.css";
import { useEffect, useState ,useRef} from "react";
import MovieCard from "./components/movieCard/MovieCard";

function App() {
  const [movie, setMovie] = useState([]);
  const apiKey = "85aaeb0d5emshe1727241bca5f20p19782fjsn172bc3f28d02";
  const [genreValue, setGenreValue] = useState('');
  // const valueRef=useRef(null);
 

  useEffect(() => {
    fetchData();
  }, [genreValue]);

  async function fetchData() {
    let url = `https://imdb-top-100-movies.p.rapidapi.com/?rapidapi-key=${apiKey}`;
    if (genreValue !== null) {
      console.log('genrevalue inside fetch is ',genreValue);
      url += `&genre[0]=${genreValue}`;
    }
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setMovie(data);
  }

  function handleChange(event) {
    
    event.preventDefault();
    console.log("inside handle : ",event.target.value);
    const event1 = event.target.value
    console.log("the value is", event1);
    setGenreValue(event1);
    
  }


  // function handleChange(event) {
    
  //   event.preventDefault();
  //   console.log("inside handle : ",valueRef.current);
  //   const value = valueRef.current.value;
  //   console.log("the value is", value);
  //   setGenreValue(value)
  //   // const event1 = event.target.value
  //   // setGenreValue(event1);
  //   console.log("the genre is", genreValue);
  // }

  return (
    <div className="App">
      <BannerPart />

      <div className="populate-movie">
        <div className="selection">
          <div className="left-selection">
            <h1>Top 100</h1>
            <select
              className="filter"
              name="filter"
              id="filter"
              onChange={handleChange}
            >
              {movie.map((item) => (
                <option value={item.genre[0] }>{item.genre[0]}</option>
              ))}
            </select>
          </div>

          <div className="right-selection">
            <p className="view-style">Posters</p>
            <span>|</span>
            <p className="view-style">List</p>
          </div>
        </div>

        <div className="movie-collection">
          {movie.map((item) => (
            <MovieCard key={item.id} images={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
