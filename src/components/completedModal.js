import '../css/completedInterviewermodel.css'

const CompletedInterviewModal = ({ modalInterview, notes, show ,closeModal}) => {


    
    const modalClass = show ? "modal display-block" : "modal display-none";
    return ( 
        <div className={modalClass}>
            <div className="modal-main">
                <button className="modal-close" onClick={closeModal}>&#10060;</button>
                <h4 style={{textAlign: "center"}}>Details</h4>
                <ul>
                <li>Interview {modalInterview.id}</li>
                <li>Date : {modalInterview.date}</li>
                <li>Interviewee Name : {modalInterview.interviewee_name}</li>
                <li>Interviewee MailId : {modalInterview.interviewee_mailid}</li>
                <li>
                    Notes:{notes.content}
                </li>
                <li>Feedback Message : {modalInterview.feedback_message}</li>
                <li>Feedback Status : {modalInterview.feedback_status}</li>
                </ul>
                {console.log(notes)}
            </div>
        </div>
     );
}
 
export default CompletedInterviewModal;
