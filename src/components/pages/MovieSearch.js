import React from "react";

export default function MovieCard({movie}){
    return (
         <div className="card">
            <a href={`https://themoviedb.org/movie/${movie.id}`} target="_blank">
                <img className="card--image"
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                    alt={movie.title + ' poster'}
                    />
            </a>

        </div>
    )
}