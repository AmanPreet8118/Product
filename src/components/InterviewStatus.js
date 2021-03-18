import { Link } from 'react-router-dom';
import '../css/InterviewStatus.css'
    
const InterviewStatus = () => {
    return (  
        <div className="interview_status">
            <nav>
                <ul>
                    <li><Link to="/interviewer/upcoming" style={{textDecoration: "none", color: 'white'}}>UPCOMING</Link></li>
                    <li><Link to="/interviewer/allocated" style={{textDecoration: "none", color: 'white'}}>ACCEPTED</Link></li>
                    <li><Link to="/interviewer/ongoing" style={{textDecoration: "none", color: 'white'}}>ONGOING</Link></li>
                    <li><Link to="/interviewer/completed" style={{textDecoration: "none", color: 'white'}}>COMPLETED</Link></li>
                </ul>
            </nav>
        </div>
    );
}
 
export default InterviewStatus;