// import BannerPart from "./components/heading/BannerPart";
// import "./App.css";
// import { useEffect, useState } from "react";
// import MovieCard from "./components/movieCard/MovieCard";

// function App() {
//   const [movie, setMovie] = useState([]);
//   // const [newSet ,setNewSet] = useState([]);
//   const apiKey = "034ffaa05cmshb1974b44a6c1850p14c215jsn3f28e98f452e";
//   const [genreValue, setGenreValue] = useState('');
//   let url = `https://imdb-top-100-movies.p.rapidapi.com/?rapidapi-key=${apiKey}`;

//   useEffect(() => {
//     fetchData();
//   }, [genreValue]);

//   async function fetchData() {
//     console.log(`the url on first load is ${url}`);
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log('data obtained on first load',data);

//      let tempData = data.map((element) => {
//       return {
//         genre: element.genre[0],
//         image: element.image,
//         id: element.id,
//       };
//     });
//     console.log(`the value of tempData is ${tempData}`) //here tempData being displayed is [object Object]
//     setMovie(tempData); //Trying to set the values obtained from url to movie array
//     // setNewSet(movie) //Also setting the same values obtained from url to another array called newSet -->
//     console.log(`the value set in movie first time ${movie}`)

//   }

//   function handleChange(event) {
//     event.preventDefault();
//     console.log("inside handle : ", event.target.value);
//     const event1 = event.target.value;
//     console.log("the value is", event1);
//     setGenreValue(event1);
//   }

//   return (
//     <div className="App">
//       <BannerPart />

//       <div className="populate-movie">
//         <div className="selection">
//           <div className="left-selection">
//             <h1>Top 100</h1>
//             <select
//               className="filter"
//               name="filter"
//               id="filter"
//               onChange={handleChange}
//             >
//               {movie.map((item) => (
//                 <option value={item.genre}>{item.genre}</option>
//               ))}
//             </select>
//           </div>

//           <div className="right-selection">
//             <p className="view-style">Posters</p>
//             <span>|</span>
//             <p className="view-style">List</p>
//           </div>
//         </div>

//         <div className="movie-collection">
//           {movie.map((item) => (
//             <MovieCard key={item.id} images={item.image} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
//           }

// export default App;




//Actual working code below...modified above (trial and error)

import BannerPart from "./components/heading/BannerPart";
import "./App.css";
import { useEffect, useState, useRef } from "react";
import MovieCard from "./components/movieCard/MovieCard";

function App() {
  const [movie, setMovie] = useState([]);
  const apiKey = "034ffaa05cmshb1974b44a6c1850p14c215jsn3f28e98f452e";
  const [genreValue, setGenreValue] = useState(" ");
  let url = `https://imdb-top-100-movies.p.rapidapi.com/?rapidapi-key=${apiKey}`;
  // const valueRef=useRef(null);

  useEffect(() => {
    fetchData();
  }, [genreValue]);

  async function fetchData() {
    if (genreValue !== null) {
      console.log(`genrevalue inside fetch is ${genreValue}`);
      url +=`&genre=${genreValue}`;
    }
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setMovie(data);
    setGenreValue(" ");
  }
  

  function handleChange(event) {
    event.preventDefault();
    console.log("inside handle : ", event.target.value);
    const event1 = event.target.value;
    console.log("the value is", event1);
    setGenreValue(event1);
  }

 
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
                <option value={item.genre[0]}>{item.genre[0]}</option>
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
          {movie.map((item,id) => (
            <MovieCard key={id} images={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
