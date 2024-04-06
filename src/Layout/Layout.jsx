import React from 'react'
import Routers from '../routers/Routers'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Layout = () => {
  return (
    <>
    <Header/>
    <div>
    <Routers/>

    </div>
<Footer/>

    </>
    )
}

export default Layout