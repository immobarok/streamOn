import React, { useEffect, useState } from 'react';
import './Series.css';
import { Link } from 'react-router';

const Series = () => {
   const [seriesData, setSeriesData] = useState([]);
   const [page, setPage] = useState(1);

   const options = {
      method: 'GET',
      headers: {
         accept: 'application/json',
         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmQ5YzA1YzlmZDU3NjlhYWEwYjA2MDU2OGFhNzVhZCIsIm5iZiI6MTc0NjI5MTIwNy42MDE5OTk4LCJzdWIiOiI2ODE2NGEwN2YyYmFhNjhhNGU5MDgwZDkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.3BHUGPVaMij227ijd0h_7j4K-Yn53zwio-l-WbBd5f4',
      }
   };

   const fetchSeries = () => {
      fetch(`https://api.themoviedb.org/3/tv/popular?language=en-US&page=${page}`, options)
         .then(res => res.json())
         .then(res => {
            if (Array.isArray(res.results)) {
               setSeriesData(res.results);
            } else {
               setSeriesData([]);
            }
         })
         .catch(err => {
            console.error('Failed to fetch series data:', err);
            setSeriesData([]);
         });
   };

   useEffect(() => {
      fetchSeries();
   }, [page]);

   return (
      <div className='series-container'>
         <h2 className='section-title'>Popular Series</h2>
         <span className='section-hr'></span>
         <div className='series-grid'>
            {seriesData.map((item) => (
               <Link to={`/player/${item.id}`} className='series-card' key={item.id}>
                  <div className='card-image-container'>
                     <img
                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                        alt={item.name}
                        className='series-poster'
                     />
                     <div className='card-overlay'>
                        <h3 className='card-title'>{item.name}</h3>
                        <p className='card-rating'>⭐ {item.vote_average.toFixed(1)}/10</p>
                     </div>
                  </div>
               </Link>
            ))}
         </div>

         <div className='pagination-controls'>
            <button disabled={page <= 1} onClick={() => setPage(page - 1)}>Prev</button>
            <span>Page {page}</span>
            <button onClick={() => setPage(page + 1)}>Next</button>
         </div>
      </div>
   );
};

export default Series;
