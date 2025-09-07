import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'
import menImages from './data.js'
const mainpage = () => {
    const [MensFashion , setMensFashion] = useState(menImages)
  return (
    <div>
        <Header></Header>
        <Banner></Banner>
        <Collections MensFashion={MensFashion}></Collections>
        <Footer></Footer>
    </div>
  )
}

export default mainpage