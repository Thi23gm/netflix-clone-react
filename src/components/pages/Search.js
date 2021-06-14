import React, {useEffect, useState}  from 'react'
import './Search.css'
import Header from '../Header';
import MovieSearch from "./MovieSearch"

export default function SearchMovies(){

    const [blackHeader, setBlackHeader] = useState(false);

    const [query, setQuery] = useState('');

    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => 
    {
        e.preventDefault();
        
        const url = `https://api.themoviedb.org/3/search/movie?api_key=a8bb13ae488f4f310f033ae472901b1f&language=pt-BR&query=${query}&page=1&include_adult=false`;
        
        try 
        {
            const res = await fetch(url);
            const data  = await res.json();
            console.log(data.results);
            setMovies(data.results);
        }catch(err)
        {
            console.error(err);
        }
    }

    useEffect(()=>{
        const scrollListener = () => {
          if (window.scrollY > 70) {
            setBlackHeader(true);
          }
          else{
            setBlackHeader(false);
          }
        }
    
        window.addEventListener('scroll', scrollListener);
    
        return () => {
          window.removeEventListener('scroll', scrollListener);
        }
      }, []);

    return (
        <div>
            <Header black={blackHeader}/>
           <form className="form" onSubmit={searchMovies}>
                <input className="input" type="text" name="query"
                    placeholder="Nome do Filme" autocomplete="off" 
                    value={query} onChange={(e) => setQuery(e.target.value)}
                    />
                <button className="button" type="submit">Buscar</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => 
                (
                    <div className = 'img--poster'>
                        <MovieSearch movie={movie} key={movie.id} />
                    </div>    
                ))}
            </div>
                
        </div>
    )
}
