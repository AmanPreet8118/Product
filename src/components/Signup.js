import React, { useState } from 'react';
import  '../css/signup.css';
import { Link } from 'react-router-dom';
import SignupModal from './SignupModal';

async function signupUser(credentials){
    return fetch('http://35.240.188.169:8000/api/user/', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json',
        },
        body: JSON.stringify(credentials)
      })
      .then(res => res.json());
}


const Signup=()=>{
    
    const [data,setData]=useState({
        user_name:"",
        email:"",
        first_name:"",
        password:"",
        role:"HR",
        cv:"",
        designation:""
    });
    const [signupStatus, setSignupStatus] = useState(false);

    function handle(e){
        const nd={...data};
        nd[e.target.id]=e.target.value;
        setData(nd);
    }

    const handleSubmit = async event => {    
        event.preventDefault();
        const userSignupData = await signupUser(data);
        if(data.role==="Interviewer") {
            fetch('http://35.240.188.169:8000/api/interviewer/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json',
                },
                body: JSON.stringify({
                    designation: data.designation,
                    interviewer_details: userSignupData.id
                })
            })
            .then(res => res.json());
        }
        else if(data.role==="Candidate") {
            fetch('http://35.240.188.169:8000/api/interviewee/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json',
                },
                body: JSON.stringify({
                    cv: data.cv,
                    interviewee_details: userSignupData.id
                })
            })
            .then(res => res.json());
        }
        setSignupStatus(true);
    }
    return(
        <div className="signup">
        <form  style={{border:"1px solid #ccc"}} onSubmit={handleSubmit} >
            <div class="container">
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
                <hr></hr>

                <label><b>Name</b></label>
                <input placeholder="name" type="text" onChange={(e)=>handle(e)} id="user_name" value={data.user_name} required></input>
                <label><b>Email</b></label>

                <input placeholder="email" type="email" onChange={(e)=>handle(e)} id="email" value={data.email} required></input>
                <label for="psw"><b>Password</b></label>

                <input placeholder="passwrd" type="password" onChange={(e)=>handle(e)} id="password" value={data.password} required></input>

                <label for="firstname"><b>First Name</b></label>
                <input type="text" placeholder="First Name" id="first_name"  onChange={(e) => handle(e)} value={data.first_name} required></input>
                
                <label ><b>Select one type of role</b></label>
                <br></br>
                <select  onChange={(e)=>handle(e)} id="role" value={data.role} required>
                    <option value="HR">HR</option>
                    <option value="Interviewer">Interviewer</option>
                    <option value="Candidate">Candidate</option>
                </select>
                {(() => {
                    if (data.role==="Candidate") {
                        return (
                            <div>
                                <label for="cv">Candidate upload your CV:</label>
                                <input  type="text" id="cv" placeholder="ENTER CV LINK" value={data.cv} onChange={(e) => handle(e) } required></input>
                                <br/><br/>
                            </div>
                        )
                    } else if (data.role==="Interviewer") {
                        return (
                            <div>
                                <label for="designation"><b>Interviewer Designation</b></label>
                                <input type="text" placeholder="Enter designation" id="designation" value={data.designation} onChange={(e) => handle(e)} required></input>
                            </div>
                        )
                    } else if(data.role==="HR") {
                        return (
                            <div>
                                <p>Selected Role is HR</p>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div>select one</div>
                        )
                    }
                })()}

                <div class="clearfix">
                    <button type="button" class="cancelbtn"><Link to="/" style={{textDecoration: "none", color: 'white'}}>Login</Link></button>
                    <button type="submit" class="signupbtn">Sign Up</button>
                </div>
            </div>
        </form>
        <SignupModal display={signupStatus} setSignupStatus={setSignupStatus}/>
    </div>
    )
}
export default Signup
