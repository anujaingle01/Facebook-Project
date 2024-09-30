import React from 'react'
import {CiSearch} from "react-icons/ci"
import {BsFillBellFill,BsFillPersonFill,BsChatRightTextFill} from "react-icons/bs"
import "./Topbar.css"

function Topbar() {
  return (
    <div>
        <div className='topbarContainer'>

            <div className='topbarLeft'>
                <span className='logo'>Facebook</span>
            </div>
            
            <div className='topbarCenter'>
                <div className='searchbar'>
                    <CiSearch className="searchIcon" />
                    <input type='text' className='searchInput' placeholder='Search for Friends or Posts'/>
                </div>
            </div>

            <div className='topbarRight'>
                <div className='topbarLinks'>
                    <span className='topbarlink'>Homepage</span>
                    <span className='topbarlink'>Timeline</span>
                </div>
                <div className='topbarIcons'>
                    <div className='topbarIconItem'><BsFillPersonFill/>
                        <span className='topbarIconBadge'>6</span>
                    </div>
                    <div className='topbarIconItem'><BsChatRightTextFill/>
                        <span className='topbarIconBadge'>28</span>
                    </div>
                    <div className='topbarIconItem'><BsFillBellFill/>
                        <span className='topbarIconBadge'>58</span>
                    </div>
                </div>

                <img src='https://tse1.mm.bing.net/th?id=OIP.GCy_6SInUjrt32PquGcWNgHaEz&pid=Api&P=0&h=180' alt='Kohli' className='topbarImg'/>
            </div>

        </div>
    </div>
  )
}

export default Topbar