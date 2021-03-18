import { useEffect, useState } from 'react';
import InterviewerHeader from "./InterviewerHeader";
import OngoingMain from "./OngoingMain";
import '../css/OngoingInterview.css'
import InterviewStatus from './InterviewStatus';

const OngoingInterview = ({ handleLogout, userid }) => {

    const [questions, setQuestions]= useState([]);
    const [interviewDetails, setInterviewDetails] = useState([]);

    const [feedbackDisp,setFeedbackDisp] = useState(false);
    const [showCV, setShowCV] = useState(false);

    const handleSubmit = (notes) => {
        fetch(`http://35.240.188.169:8000/api/notes/`,{
            'method': 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: notes,
                interview: interviewDetails.id
            })
        })
        .then(res => res.json())
        setFeedbackDisp(true);
    }

    useEffect(() => {
        fetch(`http://35.240.188.169:8000/api/interview/ongoing/${userid}`,{
            'method': 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(res => setInterviewDetails(res))
        .catch(err => console.log(err));

        fetch(`http://35.240.188.169:8000/api/interviewer/questions/${userid}/`,{
            'method': 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(res => setQuestions(res))
        .catch(err => console.log(err));
    }, [userid])

    const handleEndInterview = async ( message, status ) => {
        fetch(`http://35.240.188.169:8000/api/feedback/`,{
            'method': 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                status: status,
                message: message,
                interview: interviewDetails.id
            })
        })
        .then(res => res.json());
        fetch(`http://35.240.188.169:8000/api/interview/${interviewDetails.id}/`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            interview_status:"completed",
            date: interviewDetails.date,
            start_time: interviewDetails.start_time,
            finish_time: interviewDetails.finish_time,
            interviewee: interviewDetails.interviewee,
            interviewer: interviewDetails.interviewer,
            backup_interviewer: interviewDetails.backup_interviewer
          }),
        })
        .then((res) => res.json())
        
        setFeedbackDisp(false);
    }

    return ( 
        <div>
            <InterviewerHeader handleLogout={handleLogout}/>
            <InterviewStatus />
            <OngoingMain 
                questions={questions} 
                feedbackDisp={feedbackDisp}
                handleSubmit={handleSubmit}
                setFeedbackDisp={setFeedbackDisp}
                showCV={showCV}
                setShowCV={setShowCV}
                interviewDetails = {interviewDetails}
                handleEndInterview={handleEndInterview}
            />
        </div> 
    );
}
 
export default OngoingInterview;
