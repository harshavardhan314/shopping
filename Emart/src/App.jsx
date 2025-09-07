import { useState } from 'react'
import React from 'react'
import './App.css'
import Mainpage from './shopping/pages/mainpage'
import menImages from './data.js'

const App = () => {
  const [MensFashion , setMensFashion] = useState(menImages)
  return (
    <div>
      <Mainpage MensFashion={MensFashion}/>
    </div>
  )
}

export default App