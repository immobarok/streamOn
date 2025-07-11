import React, { useEffect, useState } from 'react';
import './ActionMovie.css';
import { Link } from 'react-router';
import { useSpinner } from '../../Provider/SpinnerContext'; // 🌀 import useSpinner

const Action = () => {
   const [actionMovies, setActionMovies] = useState([]);
   const [page, setPage] = useState(1);
   const [error, setError] = useState(null);
   const { loading, setLoading } = useSpinner(); // 🌀 use global spinner

   const options = {
      method: 'GET',
      headers: {
         accept: 'application/json',
         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmQ5YzA1YzlmZDU3NjlhYWEwYjA2MDU2OGFhNzVhZCIsIm5iZiI6MTc0NjI5MTIwNy42MDE5OTk4LCJzdWIiOiI2ODE2NGEwN2YyYmFhNjhhNGU5MDgwZDkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.3BHUGPVaMij227ijd0h_7j4K-Yn53zwio-l-WbBd5f4',
      }
   };

   const fetchActionMovies = async () => {
      setLoading(true);
      setError(null);

      const delay = new Promise(resolve => setTimeout(resolve, 1500)); // ⏱️ 1.5s spinner delay

      try {
         const res = await fetch(`https://api.themoviedb.org/3/discover/movie?language=en-US&page=${page}&with_genres=28`, options);
         const data = await res.json();
         if (Array.isArray(data.results)) {
            setActionMovies(data.results);
         } else {
            setActionMovies([]);
         }
      } catch (err) {
         console.error('Failed to fetch action movies:', err);
         setError('Failed to load movies.');
         setActionMovies([]);
      }

      await delay;
      setLoading(false);
   };

   useEffect(() => {
      fetchActionMovies();
   }, [page]);

   return (
      <div className='series-container'>
         <h2 className='section-title'>Action Movies</h2>
         <span className='section-hr'></span>

         {loading ? (
            <div className="spinner">Loading...</div>
         ) : error ? (
            <div>{error}</div>
         ) : (
            <div className='series-grid'>
               {actionMovies.map((movie) => (
                  <Link to={`/player/${movie.id}`} className='series-card' key={movie.id}>
                     <div className='card-image-container'>
                        <img
                           src={
                              movie.poster_path
                                 ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                 : '/fallback.jpg'
                           }
                           alt={movie.title}
                           className='series-poster'
                        />
                        <div className='card-overlay'>
                           <h3 className='card-title'>{movie.title}</h3>
                           <p className='card-rating'>⭐ {movie.vote_average.toFixed(1)}/10</p>
                        </div>
                     </div>
                  </Link>
               ))}
            </div>
         )}

         <div className='pagination-controls'>
            <button disabled={page <= 1} onClick={() => setPage(page - 1)}>Prev</button>
            <span>Page {page}</span>
            <button onClick={() => setPage(page + 1)}>Next</button>
         </div>
      </div>
   );
};

export default Action;
