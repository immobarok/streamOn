import './Navbar.css'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import logo from '../../assets/streamOn.png'
import { useEffect, useRef } from 'react'

const Navbar = () => {
   const navRef = useRef();
   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY >= 80) {
            navRef.current?.classList.add('nav-dark');
         } else {
            navRef.current?.classList.remove('nav-dark');
         }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);
    
   return (
      <div className='navbar' ref={navRef}>
         <div className='navbar-left'>
            <img className='logo' src={logo} alt="" />
            <ul>
               <li>Home</li>
               <li>TV Show</li>
               <li>New & Popular</li>
               <li>My List</li>
               <li>Browse My Languages</li>
            </ul>
         </div>
         <div className='navbar-right'>
            <div className='search-bar'>
               <form action="">
                  <input type="text" placeholder='Search Movies Here...' />
                  <button>
                     <img src={search_icon} alt="" />
                  </button>
               </form>
            </div>
            <img className='icons' src={bell_icon} alt="" />
            <div className="navbar-profile">
               <img className='profile' src={profile_img} alt="" />
               <img className='' src={caret_icon} alt="" />
               <div className='dropdown'>
                  <p>Sign Out of STREAMON</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Navbar