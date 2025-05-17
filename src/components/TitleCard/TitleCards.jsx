import React, { useEffect, useState } from 'react'
import './TitleCards.css'
import { Link } from 'react-router' // Fixed import

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmQ5YzA1YzlmZDU3NjlhYWEwYjA2MDU2OGFhNzVhZCIsIm5iZiI6MTc0NjI5MTIwNy42MDE5OTk4LCJzdWIiOiI2ODE2NGEwN2YyYmFhNjhhNGU5MDgwZDkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.3BHUGPVaMij227ijd0h_7j4K-Yn53zwio-l-WbBd5f4'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category || "now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => {
        if (Array.isArray(res.results)) {
          setApiData(res.results);
        } else {
          setApiData([]); // fallback to prevent errors
        }
      })
      .catch(err => {
        console.error("Failed to fetch movie data:", err);
        setApiData([]); // fallback on error
      });
  }, [category]);

  return (
    <div className='title-cards-container'>
      <h2 className='section-title'>{title || "Popular On STREAM ON"}</h2>
      <span className='section-hr'></span>
      <div className='cards-grid'>
        {apiData.length > 0 ? (
          apiData.map((card) => (
            <Link to={`/player/${card.id}`} className='movie-card' key={card.id}>
              <div className='card-image-container'>
                <img
                  src={`https://image.tmdb.org/t/p/w500${card.poster_path}`}
                  alt={card.title}
                  className='card-image'
                />
                <div className='card-overlay'>
                  <h3 className='card-title'>{card.original_title}</h3>
                  <p className='card-rating'>⭐ {card.vote_average}/10</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className='loading-text'>Loading movies...</p>
        )}
      </div>
    </div>
  )
}

export default TitleCards;
