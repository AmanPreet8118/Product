import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import InterviewerProfile from './components/InterviewerProfile';
import QuestionBank from './components/QuestionBank';
import UpcomingInterview from './components/UpcomingInterview';
import Completed from './components/completedInterviewer';
import Allocated from './components/Allocated';
import OngoingInterview from './components/OngoingInterview';
import useToken from './useToken';
import useUserid from './useUserid';
import useRole from './useRole';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';

function App() {

  const { token, setToken } = useToken();
  const { userid, setUserid } = useUserid();
  const { role, setRole } = useRole();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken();
    setUserid();
    setRole();
  }

  if(!token){
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={(props) => <Login {...props} setToken={setToken} setUserid={setUserid} setRole={setRole} />} />
          <Route exact path="/signup" render={() => <Signup />} />
        </Switch>
      </Router>
    )
  }
  else if(role==="Interviewer"){
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} handleLogout={handleLogout} userid={userid}/>}/>
        <Route exact path="/interviewer/profile" render={(props) => <InterviewerProfile {...props} handleLogout={handleLogout} userid={userid} />} />
        <Route exact path="/interviewer/questions" render={(props) => <QuestionBank {...props} handleLogout={handleLogout} userid={userid} />}/>
        <Route exact path="/interviewer/upcoming" render={(props) => <UpcomingInterview {...props} handleLogout={handleLogout} userid={userid} />} />
        <Route exact path="/interviewer/completed" render={(props) => <Completed {...props} handleLogout={handleLogout} userid={userid} />} />
        <Route exact path="/interviewer/allocated" render={(props) => <Allocated {...props} handleLogout={handleLogout} userid={userid} />} />
        <Route exact path="/interviewer/ongoing" render={(props) => <OngoingInterview {...props} handleLogout={handleLogout} userid={userid} />} />
      </Switch>
    </Router>
  );
  }
  else if(role==="HR"){
    return (
      <div>
        HR page
      </div>
    );
  }
  return (
    <div>
      Candidate page
    </div>
  )

}
export default App;
