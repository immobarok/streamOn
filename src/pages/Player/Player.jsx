import "./Player.css"
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const Player = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmQ5YzA1YzlmZDU3NjlhYWEwYjA2MDU2OGFhNzVhZCIsIm5iZiI6MS43NDYyOTEyMDc2MDE5OTk4ZSs5LCJzdWIiOiI2ODE2NGEwN2YyYmFhNjhhNGU5MDgwZDkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2Gh6UCIHmttUtHaJF7ZI8UoswwwM-kB6vQe0pZzP02A'
    }
  };


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results[0]))
      .catch(err => console.error(err));
  }, [id])


  return (
    <div className="player">
      <img onClick={() => navigate(-2)} src={back_arrow_icon} alt="icon_back" />
      <iframe width={'90%'} height={"90%"}
        src={`https://www.youtube.com/embed/${apiData.key}`} title="trailer" frameBorder={0} allowFullScreen
      ></iframe>
      <div className="player_info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.typeof}</p>
      </div>
    </div>
  )
}

export default Player