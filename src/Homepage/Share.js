import React from 'react'
import {MdOutlineInsertPhoto} from 'react-icons/md'
import {AiOutlineTag} from 'react-icons/ai'
import {CiLocationOn} from 'react-icons/ci'
import {BsEmojiSmile} from 'react-icons/bs'
import './Share.css'

function Share() {
    var style1={color:"blue"};
    var style2={color:"red"};
    var style3={color:"green"};
    var style4={color:"yellow"};
  
    return (
    <>
     <div className="share">
        <div className='shareWrapper'>
            <div className='shareTop'>
                <img src='https://tse1.mm.bing.net/th?id=OIP.GCy_6SInUjrt32PquGcWNgHaEz&pid=Api&P=0&h=180' alt='Virat Kohli' className='shareProfileImg'></img>
                <input placeholder="What's on your Mind ? " className='shareInput'></input>
            </div>

            <hr className='shareHr'></hr>

            <div className='shareButton1'>
                <div className='shareOptions'>

                    <div className='shareOption'>
                        <MdOutlineInsertPhoto style={style2} className = "shareIcon" />
                        <span className='shareOptionText'>Photo/Video</span>
                    </div>

                    <div className='shareOption'>
                        <AiOutlineTag style={style1} className = "shareIcon" />
                        <span className='shareOptionText'>Tag</span>
                    </div>

                    <div className='shareOption'>
                        <CiLocationOn style={style3} className = "shareIcon" />
                        <span className='shareOptionText'>Location</span>
                    </div>

                    <div className='shareOption'>
                        <BsEmojiSmile style={style4} className = "shareIcon" />
                        <span className='shareOptionText'>Feelings</span>
                    </div>

                    <button className="shareButton">Share</button>
                </div>
            </div>


        </div>
     </div>
    </>
  )
}

export default Share
