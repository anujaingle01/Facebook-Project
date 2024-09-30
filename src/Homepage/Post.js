import React from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";
import './Post.css'


function Post() {
  return (
    <>
        <div className='post'>
            <div className='postWrapper'>

            <div className='postTop'>
                <div className='postTopLeft'>
                    <img src='https://tse1.mm.bing.net/th?id=OIP.GCy_6SInUjrt32PquGcWNgHaEz&pid=Api&P=0&h=180' alt='noimg' className='postProfileImg'/>
                    <span className='postUserName'>Virat Kohli</span>
                    <span className='postDate'>10 mins ago</span>
                </div>

                <div className='postTopRight'>
                <HiOutlineDotsVertical />
                </div>
            </div>

            <div className='postCenter'>
                <span className='postText'>The only thing we have is the Moment.</span>
                <img src='https://tse1.mm.bing.net/th?id=OIP.GCy_6SInUjrt32PquGcWNgHaEz&pid=Api&P=0&h=180' alt='Virat Kohli' className='postImg' />
            </div>

            <div className='postBottom'>
                <div className='postButtonLeft'>
                    <img src='https://tse4.mm.bing.net/th?id=OIP.b3CzpJ_fTQ2t729vvig1RAHaEK&pid=Api&P=0&h=180' alt='Like' className='likeIcon'/>
                    <img src='https://tse1.mm.bing.net/th?id=OIP.Ydr4FlhJZUC8lkLU4XbEEwHaE8&pid=Api&P=0&h=180' alt='Heart' className='heartIcon'/>
                    <span className='postlikeCounter'>74125896 people like it</span>
                </div>

                <div className='postButtonRight'>
                    <span className='postCommentCounter'>567 comments
                    </span>
                </div>
            </div>

            </div>



            <div className='postWrapper'>

            <div className='postTop'>
                <div className='postTopLeft'>
                    <img src='https://tse1.mm.bing.net/th?id=OIP.GCy_6SInUjrt32PquGcWNgHaEz&pid=Api&P=0&h=180' alt='noimg' className='postProfileImg'/>
                    <span className='postUserName'>Virat Kohli</span>
                    <span className='postDate'>10 mins ago</span>
                </div>

                <div className='postTopRight'>
                <HiOutlineDotsVertical />
                </div>
            </div>

            <div className='postCenter'>
                <span className='postText'>The only thing we have is the Moment.</span>
                <img src='https://tse1.mm.bing.net/th?id=OIP.GCy_6SInUjrt32PquGcWNgHaEz&pid=Api&P=0&h=180' alt='Virat Kohli' className='postImg' />
            </div>

            <div className='postBottom'>
                <div className='postButtonLeft'>
                    <img src='https://tse4.mm.bing.net/th?id=OIP.b3CzpJ_fTQ2t729vvig1RAHaEK&pid=Api&P=0&h=180' alt='Like' className='likeIcon'/>
                    <img src='https://tse1.mm.bing.net/th?id=OIP.Ydr4FlhJZUC8lkLU4XbEEwHaE8&pid=Api&P=0&h=180' alt='Heart' className='heartIcon'/>
                    <span className='postlikeCounter'>74125896 people like it</span>
                </div>

                <div className='postButtonRight'>
                    <span className='postCommentCounter'>567 comments
                    </span>
                </div>
            </div>

            </div>
            
        </div>
    </>
)
}

export default Post
