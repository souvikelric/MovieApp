
import React from 'react'

export default function MovieCard({movie1}) {
  return (
    <div className="movie">
    <div>
      <p>{movie1.Year}</p>
    </div>
    <div>
      <img  
        src={
          movie1.Poster !== "N/A"
            ? movie1.Poster
            : "https://via.placeholder.com/400"
        }
        alt="poster"
      />
    </div>
    <div>
      <span>{movie1.Type}</span>
      <h3>{movie1.Title}</h3>
    </div>
  </div>
  )
}
