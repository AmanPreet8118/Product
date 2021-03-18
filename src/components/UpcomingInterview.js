import { useState,useEffect } from "react";
import InterviewerHeader from "./InterviewerHeader";
import InterviewStatus from "./InterviewStatus";
import UpcomingInterviewModal from './UpcomingInterviewModal'

const UpcomingInterview = ({ handleLogout, userid }) => {
    const [interviews,setInterviews]=useState([])
    const [show,setShow]=useState(false)
    const [modalInterview,setModalInterview] = useState(0)  //to show the clicked interview details in modal
    const showModal = (filteredInterview) =>{
        setShow(true)
        setModalInterview(filteredInterview)
    }
    const closeModal = () => {
        setShow(false)
    }
    
    useEffect(() => {
        fetch(`http://35.240.188.169:8000/api/interview/upcoming/${userid}`,{
          'method':'GET',
          headers:{
            'Content-Type': 'Application/json'
          }
        })
          .then(resp => resp.json())
          .then(resp => setInterviews(resp))
          .catch(error=> console.log(error))  
      },[userid])

      const handleAccept = ( interview_id, interviewerType ) => {
        const newInterviews = interviews.filter((interview) => interview.id !== interview_id);
        setInterviews(newInterviews);
        const body = modalInterview;
        if(interviewerType === "primary"){
            body.interviewer = userid;
            setModalInterview(body);
        }
        else if(interviewerType === "backup"){
            body.backup_interviewer = userid;
            setModalInterview(body);
        }
        else {
            console.log("Unknown interview type");
        }
        fetch(`http://35.240.188.169:8000/api/interview/${modalInterview.id}/`,{
            'method':'PUT',
            headers:{
              'Content-Type': 'Application/json'
            },
            body: JSON.stringify(modalInterview)
        })
        .then(resp => resp.json());
        closeModal();
      }

    return ( 
        <div>
            <InterviewerHeader handleLogout={handleLogout} />
            <InterviewStatus />
            <h3 style={{marginLeft: "8%"}}>UPCOMING</h3>
            <p className="card_allocated" >
                <div className="container_allocated">Interview-id</div>
                <div className="container_allocated">Date</div>
                <div className="container_allocated">Time</div>
            </p>
            {
                interviews.map(
                    interview => {
                        return(
                            <div >
                                <div onClick={()=>showModal(interview)}>
                                   <p className="card_allocated" >
                                        <div className="item_allocated">Interview {interview.id}</div>
                                        <div className="item_allocated">{interview.date}</div>
                                        <div className="item_allocated">{interview.start_time} - {interview.finish_time}</div>
                                    </p>
                                </div>
                            </div>
                        )
                    }
                )
            }
            <UpcomingInterviewModal modalInterview={modalInterview} show={show} showModal={showModal} closeModal={closeModal} handleAccept={handleAccept}/>
        </div>
     );
}
 
export default UpcomingInterview;
