import './Navbar.css'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import logo from '../../assets/streamOn.png'
import { useEffect, useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router'

const Navbar = () => {
   const navRef = useRef();
   const genreRef = useRef();
   const navigate = useNavigate();
   const [genreDropdownOpen, setGenreDropdownOpen] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         navRef.current?.classList.toggle('nav-dark', window.scrollY >= 80);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   useEffect(() => {
      const handleClickOutside = (event) => {
         if (genreRef.current && !genreRef.current.contains(event.target)) {
            setGenreDropdownOpen(false);
         }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
   }, []);

   const handleGenreHover = (isHovering) => {
      setGenreDropdownOpen(isHovering);
   };

   const handleGenreNavigation = (path) => {
      navigate(path);
      setGenreDropdownOpen(false);
   };

   return (
      <div className='navbar' ref={navRef}>
         <div className='navbar-left'>
            <img className='logo' src={logo} alt="StreamOn Logo" />
            <ul>
               <li><NavLink to='/'>Home</NavLink></li>
               <li><NavLink to='/all-movies'>All Movies</NavLink></li>
               <li><NavLink to='/series'>Series</NavLink></li>
               <li
                  className="genre-dropdown"
                  ref={genreRef}
                  onMouseEnter={() => handleGenreHover(true)}
                  onMouseLeave={() => handleGenreHover(false)}
               >
                  <span>
                     Genre
                     <img
                        className={`dropdown-caret ${genreDropdownOpen ? 'rotated' : ''}`}
                        src={caret_icon}
                        alt="Dropdown"
                     />
                  </span>
                  <ul className={`genre-dropdown-menu ${genreDropdownOpen ? 'active' : ''}`}>
                     <li onClick={() => handleGenreNavigation("/genre/action")}>Action</li>
                     <li onClick={() => handleGenreNavigation("/genre/comedy")}>Comedy</li>
                     <li onClick={() => handleGenreNavigation("/genre/horror")}>Horror</li>
                     <li onClick={() => handleGenreNavigation("/genre/drama")}>Drama</li>
                     <li onClick={() => handleGenreNavigation("/genre/romance")}>Romance</li>
                  </ul>
               </li>
            </ul>
         </div>

         <div className='navbar-right'>
            <div className='search-bar'>
               <form onSubmit={(e) => e.preventDefault()}>
                  <input type='text' placeholder='Search Movies Here...' />
                  <button type="submit">
                     <img src={search_icon} alt='Search' />
                  </button>
               </form>
            </div>
            <img className='icons' src={bell_icon} alt='Notifications' />
            <div className='navbar-profile'>
               <img className='profile' src={profile_img} alt='Profile' />
               <img className='profile-caret' src={caret_icon} alt='Dropdown Icon' />
               <div className='dropdown'>
                  <p>Sign Out</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Navbar