import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'

const mainpage = () => {
  return (
    <div>
        <Header></Header>
        <Banner></Banner>
        <Collections></Collections>
        <Footer></Footer>
    </div>
  )
}

export default mainpage