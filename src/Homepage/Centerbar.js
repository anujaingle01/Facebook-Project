import React from 'react'
import './Centerbar.css'
import Share from './Share';
import Post from './Post' ;

function Centerbar() {
  return (
    <>
      <div className='centerbar'>
        <div className='centerbarwrapper'>
          <Share/>
          <Post/>
        </div>
      </div>
    </>
  )
}

export default Centerbar
