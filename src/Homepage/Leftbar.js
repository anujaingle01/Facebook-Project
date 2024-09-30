import React from 'react'
import { MdOutlineRssFeed,MdOutlineEmojiEvents,MdOutlineChat,MdOutlineWorkOutline,MdOutlineVideoSettings,MdGroups,MdOutlineBookmarks } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { BsQuestionSquare } from "react-icons/bs";
import './Leftbar.css';


function Leftbar() {
  return (

    <>
    <div className='leftbar'>

      <div className='leftbarwrapper'> 

        <ul className='leftbarList'>
          <li className='leftbarListItems'>
          <MdOutlineRssFeed className='leftbarIcon'/>
          <span className='leftbarListItemText'>Feed</span>
          </li>

          <li className='leftbarListItems'>
          <MdOutlineChat className='leftbarIcon'/>
          <span className='leftbarListItemText'>Chat</span>
          </li>

          <li className='leftbarListItems'>
          <MdOutlineVideoSettings className='leftbarIcon'/>
          <span className='leftbarListItemText'>Videos</span>
          </li>

          <li className='leftbarListItems'>
          <MdGroups className='leftbarIcon'/>
          <span className='leftbarListItemText'>Groups</span>
          </li>

          <li className='leftbarListItems'>
          <MdOutlineBookmarks className='leftbarIcon'/>
          <span className='leftbarListItemText'>Bookmarks</span>
          </li>

          <li className='leftbarListItems'>
          <BsQuestionSquare className='leftbarIcon'/>
          <span className='leftbarListItemText'>Questions</span>
          </li>

          <li className='leftbarListItems'>
          <MdOutlineWorkOutline className='leftbarIcon'/>
          <span className='leftbarListItemText'>Jobs</span>
          </li>

          <li className='leftbarListItems'>
          <MdOutlineEmojiEvents className='leftbarIcon'/>
          <span className='leftbarListItemText'>Events</span>
          </li>

          <li className='leftbarListItems'>
          <FaGraduationCap className='leftbarIcon'/>
          <span className='leftbarListItemText'>Courses</span>
          </li>

          <button className='leftbarButton'>Show More</button>
          <hr className='leftbarhr'></hr>
          
          <ul className='leftbarFriendList'>
            <li className='leftbarFriend'>
              <img className='leftbarFriendImg' src="https://tse2.mm.bing.net/th?id=OIP.k8ViiRPoEWxk2m-RJEewnAHaHa&pid=Api&P=0&h=180" alt='Rohit Sharma'></img>
              <span className='leftbarFriendName'>Rohit Sharma</span>
            </li>

            <li className='leftbarFriend'>
              <img className='leftbarFriendImg' src="https://tse4.mm.bing.net/th?id=OIP.Ntfz5OpV7R6H-B_ZMIJ4iAHaHa&pid=Api&P=0&h=180" alt='MS Dhoni'></img>
              <span className='leftbarFriendName'>MS Dhoni</span>
            </li>

            <li className='leftbarFriend'>
              <img className='leftbarFriendImg' src="https://tse3.mm.bing.net/th?id=OIP.dxJtXoJv0slG7BaU3AKwewAAAA&pid=Api&P=0&h=180" alt='Sachin Tendulkar'></img>
              <span className='leftbarFriendName'>Sachin Tendulkar</span>
            </li>

            <li className='leftbarFriend'>
              <img className='leftbarFriendImg' src="https://tse2.mm.bing.net/th?id=OIP.P-Rx-K18vA9oslYlaYLUrwHaHa&pid=Api&P=0&h=180" alt='KL Rahul'></img>
              <span className='leftbarFriendName'>KL Rahul</span>
            </li>

            <li className='leftbarFriend'>
              <img className='leftbarFriendImg' src="https://tse3.mm.bing.net/th?id=OIP.KKLpwd9uiVuXDha59w82hQAAAA&pid=Api&P=0&h=180" alt='Hardik Pandya'></img>
              <span className='leftbarFriendName'>Hardik Pandya</span>
            </li>
          </ul>

        </ul>

      </div>

    </div>
    
    </>
  )
}

export default Leftbar