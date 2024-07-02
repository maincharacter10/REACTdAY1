import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

import Reg from './components/Reg'
import Tab from './components/Tab'
import First from './components/First'
import Details from './components/Details'



function App() {


  return (
    <>

  <Navbar/>
  <Routes>
    <Route path='/' element={<First/>} />
    <Route path='/r' element={<Reg/>} />
    <Route path='/t' element={<Tab/>} />
    <Route path='/d' element={<Details/>} />
  </Routes>
    </>
  )
}

export default App
