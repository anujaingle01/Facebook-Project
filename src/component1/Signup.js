import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'

function Signup() {
// const[defaultname,setNewname]=useState("")

const[firstname,setfirstname]=useState("")
const[lastname,setlastname]=useState("")
const[email,setemail]=useState("")
const[password,setpassword]=useState("")
const[cnfpassword,setcnfpassword]=useState("")
const[dob,setdob]=useState([])
const[gender,setgender]=useState("")
const[pwdError,setpwdError]=useState(false)


const register = (e)=>{
    e.preventDefault()

    if(password !== cnfpassword){
        setpwdError(true)
    }
    else{
        setpwdError(false)

        console.log("First Name - "+firstname)
        console.log("Last Name - "+lastname)
        console.log("Emai ID - "+email)
        console.log("Password - "+password)
        console.log("Confirm Password - "+cnfpassword)
        console.log("Birth Date - "+dob)
        console.log("Gender - "+gender)
    }
}

  return (
<>
<div className='register'>
    
    <div className='register_container'>
        <h1>Sign Up</h1>
        <p>It's quick and easy.</p>
        <div className='hr3'>
            <form onSubmit={register}>
            <div className='row'>
                <input className='register_name' type='name' placeholder='First Name' onChange={(e)=>{setfirstname(e.target.value)}} required/>
                <input className='register_name' type='name' placeholder='Last Name' onChange={(e)=>{setlastname(e.target.value)}} required/>
            </div>

            <center className='center'>
                <input type='email' placeholder='Email' onChange={(e)=>{setemail(e.target.value)}} required/>
            </center>
            <center className='center'>
                <input type='password' placeholder='New Password' maxLength={10} onChange={(e)=>{setpassword(e.target.value)}} required/>
                <input type='password' placeholder='Confirm Password' maxLength={10} onChange={(e)=>{setcnfpassword(e.target.value)}} required/>
            </center>
            {pwdError && <p className='warning'><strong>"Password is Incorrect"</strong></p>}

            <h5 className='register_date'>Date of Birth</h5>
            <div className='row'>
                <select className='register_date2' onChange={(e)=>{setdob([...dob,e.target.value])}}>
                    <option value="Day">Day</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                </select>

                <select className='register_date3'onChange={(e)=>{setdob([...dob,e.target.value])}} >
                    <option value="Day">Month</option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>

                <select className='register_date3' onChange={(e)=>{setdob([...dob,e.target.value])}} >
                    <option value="Day">Year</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    <option value="1997">1997</option>
                    <option value="1996">1996</option>
                    <option value="1995">1995</option>
                    <option value="1994">1994</option>
                    <option value="1993">1993</option>
                    <option value="1992">1992</option>
                    <option value="1991">1991</option>
                    <option value="1990">1990</option>
                    <option value="1989">1989</option>
                    <option value="1988">1988</option>
                    <option value="1987">1987</option>
                    <option value="1986">1986</option>
                    <option value="1985">1985</option>
                    <option value="1984">1984</option>
                </select>
            </div>

            <h5 className='register__gender'>Gender</h5>
                <div className='sizeing'>
                    <div className='register__radiocontainer'>
                        <div className='wrapper'>
                            <label>Female</label>
                            <input type='radio' name='gender' value="Female" onChange={(e)=>{setgender(e.target.value)}} />
                        </div>
                        <div className='wrapper'>
                            <label>Male</label>
                            <input type='radio' name='gender' value="Male" onChange={(e)=>{setgender(e.target.value)}} />
                        </div>
                        <div className='wrapper'>
                            <label>Others</label>
                            <input type='radio' name='gender' value="Others" onChange={(e)=>{setgender(e.target.value)}} />
                        </div>
                    </div>
                </div>

                <p className='register_policy'>
                    By clicking Signup, you agree to our 
                    <span> Terms, Data Policy</span> and <span>Cookie policy. </span>
                    You may receive SMS notifications from us and can opt out at any time,
                </p>

                <center>
                    <button type='submit' className='register__register'>
                        Sign up
                    </button>
                </center>
                <center>
                    <Link to="/"><p className='register_login'>Already have an Account ?</p></Link>
                </center>

            </form>

        </div>
    </div>

</div>
</>  
)
}

export default Signup
