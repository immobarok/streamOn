import { createBrowserRouter } from 'react-router';
import ErrorPage from '../pages/Error/ErrorPage';
import App from './../App';
import Login from './../pages/Login/Login';
import Player from '../pages/Player/Player';
import AllMovies from '../pages/All Movies/AllMovies';
import Home from '../pages/Home/Home';
import Series from '../pages/Series/Series';
import ActionMovie from '../pages/ActionMovie/ActionMovie';


export const router = createBrowserRouter([
   {
      path: "/",
      Component: App,
      children: [
         {
            index: true,
            Component: Home
         },
         {
            path: '/all-movies',
            Component: AllMovies
         },
         {
            path: '/series',
            Component: Series
         },
         {
            path:'/genre/action',
            Component:ActionMovie
         },
         {
            path: '/login',
            Component: Login
         },
         {
            path: '/player/:id',
            Component: Player
         },
         {
            path: '*',
            Component: ErrorPage
         }
      ]
   }

])