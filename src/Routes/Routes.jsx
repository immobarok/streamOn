import { createBrowserRouter } from 'react-router';
import ErrorPage from '../pages/Error/ErrorPage';
import Home from '../pages/Home/Home';
import App from './../App';
import Login from './../pages/Login/Login';
import Player from '../pages/Player/Player';


export const router = createBrowserRouter([
   {
      path: "/",
      Component: App
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


])

