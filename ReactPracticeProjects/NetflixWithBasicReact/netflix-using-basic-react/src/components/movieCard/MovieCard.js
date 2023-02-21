import React from 'react'
import './MovieCard.css'

function MovieCard(props) {
   
  return (
    <div className='image-size'>
        <img className='movie-poster' src={props.images.image} alt="movie-poster" />
    </div>
  )
}

export default MovieCard