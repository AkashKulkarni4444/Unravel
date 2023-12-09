import { useState } from 'react'
import './App.css'
import RootLayout from './pages/RootLayout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/dashboard/Layout/Layout';
import Dashboard from './pages/dashboard/Dashboard/Dashboard';
// import BoardPage from './pages/dashboard/Board/Board';
import Calendar from './pages/dashboard/Calendar/Calendar';
// import DataGrid from './pages/dashboard/DataGrid/DataGrid';

function App() {

  const router = createBrowserRouter([
    { path: '/', element: <RootLayout/>, 
      children: [
        // {path: '/', element: <Homepage/> },
        // {path: '/ContactUs', element: <ContactUs/> },
        // {path: '/wishlist', element: <WishlistPage/>},
        // {path: '/wishlist', element: <WishlistPage/>},
      ]
    },  
    {
      path: "/dashboard",
      element: <Layout />,
      children: [
        { path: "home", element: <Dashboard /> },
        { path: "calendar", element: <Calendar /> },
        // { path: "board", element: <BoardPage /> },
        // { path: "/users", element: <DataGrid /> },
      ],
    },
  ]);

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
