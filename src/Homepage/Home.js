import React from 'react'
import Topbar from './Topbar'
import Leftbar from './Leftbar'
import Centerbar from './Centerbar'
import Rightbar from './Rightbar'
import "./Home.css"

function Home(){
  return (
    <>
    <div>
    <Topbar/>
    </div>

    <div className='homeContainer'>
        <Leftbar/>
        <Centerbar/>
        <Rightbar/>
    </div>
    </>
  )
}

export default Home;
