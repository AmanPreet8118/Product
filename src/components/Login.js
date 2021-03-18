import React,{ useState } from 'react';
import { Link } from 'react-router-dom';

async function loginUser(credentials) {
    return fetch('http://35.240.188.169:8000/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

const Login = ({ setToken, setUserid, setRole }) => {
    const [data,setData]=useState({
        username:"",
        password:""
    })

    function handle(e){
        const nd={...data};
        nd[e.target.id]=e.target.value;
        setData(nd);
    }
    
    const handleSubmit = async event => {
        event.preventDefault();  
        const token = await loginUser(data);
        if(token.message === "Success") {
            setToken(token);
            setUserid(token);
            setRole(token);
        }
        else if(token.message === "Failure") {
            alert("Login unsuccessfull!!")
        }
     }
    return(
        <div className="signup">
            <form  style={{border:"1px solid #ccc"}}  onSubmit={handleSubmit}>
                <div className="container">
                    <label htmlFor="email"><b>Email</b></label>
                    <input placeholder="Email" type="email" onChange={(e)=>handle(e)} required id="username" value={data.username} ></input>
                    <label htmlFor="psw"><b>Password</b></label>
                    <input placeholder="password" type="password" required onChange={(e)=>handle(e)} id="password" value={data.password}></input>
                    <div className="clearfix">
                        <button type="button" className="cancelbtn"><Link to="/signup" style={{textDecoration: "none", color: 'white'}}>Sign Up</Link></button>
                        <button type="submit" className="signupbtn" >Login</button>
                    </div>
                </div>
            </form>
        </div>   
    )
}

export default Login
