import { useState } from 'react'
import './App.css'
import RootLayout from './pages/RootLayout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Homepage from './pages/PolicyDetails/PolicyDetails';
import PolicyDetails from './pages/PolicyDetails/PolicyDetails';
import Auth from './pages/Auth';
import InsuranceSearchPage from './pages/InsuranceSearchPage';
import Login from './pages/Login'
import Signup from './pages/Signup';
import Layout from './components/dashboard/Layout/Layout';
import Dashboard from './pages/dashboard/Dashboard/Dashboard';
// import BoardPage from './pages/dashboard/Board/Board';
import Calendar from './pages/dashboard/Calendar/Calendar';
// import DataGrid from './pages/dashboard/DataGrid/DataGrid';

function App() {

  const router = createBrowserRouter([
    { path: '/', element: <RootLayout/>, 
      children: [
        {path: '/', element: <Homepage/> },
        {path: '/policydetails', element: <PolicyDetails/> },
        // {path: '/ContactUs', element: <ContactUs/> },
        {path: '/auth', element: <Auth/> },
        {path: '/login', element: <Login/> },
        {path: '/signup', element: <Signup/> },
        {path: '/search', element: <InsuranceSearchPage/> },
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
