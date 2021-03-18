import '../css/InterviewerHeader.css'
import { Link } from 'react-router-dom';
import logo from '../images/CompanyLogo.JPG'

const InterviewerHeader = ({ handleLogout }) => {
    return ( 
        <header>
            <img src={logo} alt="logo" className="remote_logo"/>
            <nav className="interviewer_header_nav">
                <ul>
                    <li><Link to="/" style={{textDecoration: "none", color: 'black'}}>HOME</Link></li>
                    <li><Link to="/interviewer/profile" style={{textDecoration: "none", color: 'black'}}>PROFILE</Link></li>
                    <li><Link to="/interviewer/upcoming" style={{textDecoration: "none", color: 'black'}}>INTERVIEWS</Link></li>
                    <li><Link to="/interviewer/questions" style={{textDecoration: "none", color: 'black'}}>QUESTION BANK</Link></li>
                    <li><Link to="/" style={{textDecoration: "none", color: 'black'}} onClick={handleLogout}>LOGOUT</Link></li>
                </ul>
            </nav>
        </header>
        
     );
}
 
export default InterviewerHeader;