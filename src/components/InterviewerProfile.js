import { useEffect, useState } from "react";
import InterviewerHeader from "./InterviewerHeader"
import Profile from "./Profile";
import '../css/InterviewerProfile.css'

const InterviewerProfile = ({ handleLogout, userid }) => {
    
    
    const [interviewer, setInterviewer] = useState([]);

    useEffect(() => {
        fetch(`http://35.240.188.169:8000/api/interviewer/profile/${userid}/`, {
            'method': 'GET',
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(res => res.json())
        .then(res => setInterviewer(res))
        .catch(err => console.log(err));
    }, [userid])

    return ( 
        <div>
            <InterviewerHeader handleLogout={handleLogout}/>
            <Profile 
                interviewer={interviewer}  
            />
        </div>
    );
}
 
export default InterviewerProfile;
