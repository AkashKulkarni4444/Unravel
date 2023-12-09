import { useState } from 'react'
import './App.css'
import RootLayout from './pages/RootLayout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {

  const router = createBrowserRouter([
    { path: '/', element: <RootLayout/>, 
      children: [
        // {path: '/', element: <Homepage/> },
        // {path: '/ContactUs', element: <ContactUs/> },
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
