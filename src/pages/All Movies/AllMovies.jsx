import React, { useEffect, useState } from 'react';
import './AllMovies.css';
import { Link } from 'react-router';
import { useSpinner } from '../../Provider/SpinnerContext';

const AllMovies = () => {
   const [movies, setMovies] = useState([]);
   const [page, setPage] = useState(1);
   const [totalPages, setTotalPages] = useState(1);
   const { setLoading } = useSpinner();

   const options = {
      method: 'GET',
      headers: {
         accept: 'application/json',
         Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmQ5YzA1YzlmZDU3NjlhYWEwYjA2MDU2OGFhNzVhZCIsIm5iZiI6MTc0NjI5MTIwNy42MDE5OTk4LCJzdWIiOiI2ODE2NGEwN2YyYmFhNjhhNGU5MDgwZDkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.3BHUGPVaMij227ijd0h_7j4K-Yn53zwio-l-WbBd5f4',
      },
   };

   useEffect(() => {
      const fetchMovies = async () => {
         setLoading(true);

         const delay = new Promise(resolve => setTimeout(resolve, 1000)); // minimum spinner time

         try {
            const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`, options);
            const data = await res.json();
            setMovies(data.results || []);
            setTotalPages(data.total_pages || 1);
         } catch (error) {
            console.error('Error fetching movies:', error);
            setMovies([]);
         }

         await delay;
         setLoading(false);
      };

      fetchMovies();
   }, [page]);
   

   const handleNext = () => {
      if (page < totalPages) setPage((prev) => prev + 1);
   };

   const handlePrev = () => {
      if (page > 1) setPage((prev) => prev - 1);
   };

   return (
      <div className="all-movies-container">
         <h2 className="section-title">Latest Movies</h2>
         <span className='section-hr'></span>
         <div className="cards-grid">
            {movies.length > 0 ? (
               movies.map((movie) => (
                  <Link to={`/player/${movie.id}`} className="movie-card" key={movie.id}>
                     <div className="card-image-container">
                        <img
                           src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                           alt={movie.title}
                           className="card-image"
                        />
                        <div className="card-overlay">
                           <h3 className="card-title">{movie.original_title}</h3>
                           <p className="card-rating">⭐ {movie.vote_average}/10</p>
                        </div>
                     </div>
                  </Link>
               ))
            ) : (
               <p className="loading-text">No movies found.</p>
            )}
         </div>

         {/* Pagination Controls */}
         <div className="pagination">
            <button className="page-btn" onClick={handlePrev} disabled={page === 1}>
               ⬅ Prev
            </button>
            <span className="page-info">Page {page} of {totalPages}</span>
            <button className="page-btn" onClick={handleNext} disabled={page === totalPages}>
               Next ➡
            </button>
         </div>
      </div>
   );
};

export default AllMovies;
