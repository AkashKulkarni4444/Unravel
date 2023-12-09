import { useState } from 'react'
import './App.css'
import RootLayout from './pages/RootLayout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Auth from './pages/Auth';
import InsuranceSearchPage from './pages/InsuranceSearchPage';
import Login from './pages/Login'
import Signup from './pages/Signup';

function App() {

  const router = createBrowserRouter([
    { path: '/', element: <RootLayout/>, 
      children: [
        {path: '/auth', element: <Auth/> },
        {path: '/login', element: <Login/> },
        {path: '/signup', element: <Signup/> },
        {path: '/search', element: <InsuranceSearchPage/> },
        // {path: '/wishlist', element: <WishlistPage/>},
      ]
    },  
  ]);

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
