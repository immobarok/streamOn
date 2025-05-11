import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from "../../assets/hero_banner.jpg"
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCard/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
   return (
      <div className='home'>
         <Navbar />
         <div className='hero'>
            <img className='banner-img' src={hero_banner} alt="" />
            <div className="hero-caption">
               <img src={hero_title} alt="" />
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, iure modi? Mollitia facilis nostrum sint pariatur minus voluptatibus!</p>
               <div className='hero-btns'>
                  <button className='btn'> <img src={play_icon} alt="" /> Play</button>
                  <button className='btn dark-btn'> <img src={info_icon} alt="" /> More Info</button>
               </div>
               <TitleCards />
            </div>
         </div>
         <div className='more-cards'>
            <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
            <TitleCards title={"Only on Stream On"} category={"popular"} />
            <TitleCards title={'Upcoming'} category={"upcoming"} />
            <TitleCards title={'Top pics for you'} category={"now_playing"} />
         </div>
         <Footer/>
      </div>
   )
}

export default Home