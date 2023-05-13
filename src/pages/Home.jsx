import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Searchbar } from '../components/Searchbar/Searchbar'
import { MainContent } from '../components/MainContainer/MainContent'

const Home = () => {
  return (
    <div>
    <Navbar/>
     <Searchbar/>
    {/* <MainContent />*/}
    </div>
  )
}

export default Home