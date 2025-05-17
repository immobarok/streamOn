import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from "../../assets/hero_banner.jpg"
import TitleCards from '../../components/TitleCard/TitleCards'

const Home = () => {
   return (
      <div className='home'>
         <Navbar />

         <div className='hero'>
            <img className='banner-img' src={hero_banner} alt="StreamOn Banner" />
            <div className='hero-overlay'>
               <h1 className='hero-title'>Welcome to <span>StreamOn</span></h1>
               <p className='hero-subtitle'>
                  Stream Blockbusters, Trending Shows, and Exclusives — All in One Place.
               </p>
               <button className='hero-btn'>Start Watching</button>
            </div>
         </div>

         <div className='more-cards'>
            <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
            <TitleCards title={"Only on StreamOn"} category={"popular"} />
            <TitleCards title={'Upcoming'} category={"upcoming"} />
            <TitleCards title={'Top Picks for You'} category={"now_playing"} />
         </div>
      </div>
   )
}

export default Home
