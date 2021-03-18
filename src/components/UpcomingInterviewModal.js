import { useState } from 'react';
import '../css/UpcomingInterviewModal.css'

const UpcomingInterviewModal = ({modalInterview, show, handleAccept, closeModal}) => {
    const [interviewerType,setInterviewerType] = useState(0)  //to set whether interviewer is primary or backup
    const setType = (value) => {
        setInterviewerType(value)
    }
   
    const modalClass = show ? "modal display-block" : "modal display-none";
    return ( 
        <div className={modalClass}>
            <div className="modal-main">
                <button className="modal-close" onClick={closeModal}>&#10060;</button>
                <h4 style={{textAlign: "center"}}>Details</h4>
                <p>Interview {modalInterview.id}</p>
                <p>Date : {modalInterview.date}</p>
                <input type="radio"id="primary" name="interview_type"
                 value="primary" onChange={(e)=> setType(e.target.value)}  style={modalInterview.interviewer ? {display:'none'} : {display:'inline'}}/>
                <label for="primary" style={modalInterview.interviewer ? {display:'none'} : {display:'inline'}}>Primary</label>
                <input type="radio" id="backup" name="interview_type"
                value="backup" onChange={(e)=> setType(e.target.value)} style={modalInterview.backup_interviewer ? {display:'none'} : {display:'inline'}}/>
                <label for="backup" style={modalInterview.backup_interviewer ? {display:'none'} : {display:'inline'}}>Backup</label>
                <button onClick={() => handleAccept(modalInterview.id, interviewerType)}>submit</button>
            </div>
        </div>
     );
}
 
export default UpcomingInterviewModal;