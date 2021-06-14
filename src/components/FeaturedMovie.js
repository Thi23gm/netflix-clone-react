import React from 'react'
import './FeaturedMovie.css'

export default ({item}) =>{

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for (let i in item.genres) {
        genres.push(item.genres[i].name);
    }

    return(
        <section className="featured" style={{
            backgroundSize:'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`

        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--points"><span>Relevância: </span> {item.vote_average} / 10</div>
                        <div className="featured--seasons">{item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                        <div className="featured--yaer">{firstDate.getFullYear()}</div>
                    </div>
                    <div className="featured--description">{item.overview}</div>
                    <div className="featured--buttons">
                        <a className="featured--infobutton" href={`https://themoviedb.org/tv/${item.id}`} target="_blank"> + Informações</a>
                    </div>
                    <div className="featured--genres"><span>Generos:</span> {genres.join(', ')}</div>
                </div>
            </div>
        </section>
    )
}