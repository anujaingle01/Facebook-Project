import React from 'react'
import './Rightbar.css'

function Rightbar() {
  return (
    <>
      <div className='rightbar'>
        <div className='rightbarWrapper'>

        <div className='birthdayContainer'>
          <img src='https://tse2.mm.bing.net/th?id=OIP.-3ITAWhaAQnKMv2pgw7a4QHaH3&pid=Api&P=0&h=180' alt='Gift' className='birthdayImg'/> 
          <span className='birthdayText'><b>MS Dhoni </b>and <b> 2 other Friends </b> have a Birthday today.</span>
        </div>

        <img src='https://tse3.mm.bing.net/th?id=OIP.4QiVid7sAlZ2gLUtvgla5QHaHa&pid=Api&P=0&h=180' alt='Ads' className='rightbarAd'/> 

        <h4 className='rightbarTitle'>Online Friends - </h4>

        <ul className='friendList'>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img src='https://tse3.mm.bing.net/th?id=OIP.EImmPequYpcB1XGiDh-_AQHaGL&pid=Api&P=0&h=180' alt='noimage' className='rightbarprofileImg'/>
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>Sachin Tendulkar</span>
          </li>

          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img src='https://tse2.mm.bing.net/th?id=OIP.rTx9L7gy67Ymvjv9lDb8bwHaE8&pid=Api&P=0&h=180' alt='noimage' className='rightbarprofileImg'/>
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>MS Dhoni</span>
          </li>

          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img src='https://tse1.mm.bing.net/th?id=OIP.TlRSTOfiQIyHYdRUq7Z0RAHaDt&pid=Api&P=0&h=180' alt='noimage' className='rightbarprofileImg'/>
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>KL Rahul</span>
          </li>

          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img src='https://tse4.mm.bing.net/th?id=OIP.8UlpdFqALU0CSG-11PnpfwHaFU&pid=Api&P=0&h=180' alt='noimage' className='rightbarprofileImg'/>
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>Hardik Pandya</span>
          </li>

          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img src='https://tse2.mm.bing.net/th?id=OIP.Y86p_gmuDAuhAnrXeqgasAHaIO&pid=Api&P=0&h=180' alt='noimage' className='rightbarprofileImg'/>
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>Yuzi Chahal</span>
          </li>
        </ul>


        </div>
      </div>
    </>
  )
}

export default Rightbar