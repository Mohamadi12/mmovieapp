import React from 'react'
import CArdMovie from './CArdMovie'

const DisplayMovie = ({movieApp ,del,likedmovie}) => {
  console.log('partie display =>',movieApp)
  return (
    <div className="movie-card-section">


      {
        movieApp.map((el)=>    <CArdMovie  movie={el} del={del}  likedmovie={likedmovie} />)
      }

 
  
  
    
  
   
  </div>
  )
}

export default DisplayMovie
