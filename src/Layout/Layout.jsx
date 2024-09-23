import React from 'react'
import {Routers} from '../routers/Routers'
import { useLocation } from 'react-router-dom';
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

const Layout = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard')
  return (
    <>
    {!isDashboard && <Header/>}
    <Routers/>
    {!isDashboard && <Footer/>}
    </>
    )
}

export default Layout