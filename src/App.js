import { ListItemButton } from '@mui/material'
import React, { useState } from 'react'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Section from './components/Section/Section'
const App = () => {
  const users = [
    {
      name: "Angelina",
      lastName: "Jolly",
      age: 18,
      id: 1,
    },
    {
      name: "Johnny",
      lastName: "Depp",
      age: 65,
      id: 2,
    },
    {
      name: "Margot",
      lastName: "Robbie",
      age: 38,
      id: 3,
    },
    {
      name: "Jared",
      lastName: "Liston",
      age: 34,
      id: 4,
    }
  ]
  return (
    <div>
  <Navbar />
  <Section users = {users}/>
  <Footer/>
    </div>
  )
}

export default App