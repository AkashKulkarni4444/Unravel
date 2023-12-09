import { useState } from 'react'
import './App.css'
import RootLayout from './pages/RootLayout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Homepage from './pages/PolicyDetails/PolicyDetails';
import PolicyDetails from './pages/PolicyDetails/PolicyDetails';

function App() {

  const router = createBrowserRouter([
    { path: '/', element: <RootLayout/>, 
      children: [
        {path: '/', element: <Homepage/> },
        {path: '/policydetails', element: <PolicyDetails/> },
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
