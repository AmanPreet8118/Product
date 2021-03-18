import '../css/Home.css'
import InterviewerHeader from './InterviewerHeader';

const Home = ({ handleLogout, userid }) => {
    return ( 
        <div>
            <InterviewerHeader handleLogout={handleLogout}/>
            <div className="banner">
                <p>WELCOME TO REMOTE INTERVIEW !</p>
            </div>
            <div className="home-grid">
                <div className="each-card">
                    <p className="card-header">Upcoming Interviews</p>
                    <p className="content">Here You can see all the interviews that are yet to happen</p>
                </div>
                <div className="each-card">
                    <p className="card-header">Assigned Interviews</p>
                    <p className="content">Here you can checkout all the interviews that you are assigned </p>
                </div>
                <div className="each-card">
                    <p className="card-header">Completed Interviews</p>
                    <p className="content">Here you can checkout all the interviews that you have completed</p>
                </div>
            </div>
            <div className="home-grid">
                <div className="each-card">
                    <p className="card-header">Question bank</p>
                    <p className="content">Here you can checkout your question bank</p>
                </div>
                <div className="each-card">
                    <p className="card-header">Profile</p>
                    <p className="content">Here you can checkout your Profile</p>
                </div>       
            </div>
        </div>
     );
}
 
export default Home;