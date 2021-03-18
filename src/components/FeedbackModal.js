import { useState } from "react";

const FeedbackModal = ({ display, setFeedbackDisp, handleEndInterview }) => {
    const showHideClassName = display? "modal show-block" : "modal show-none";

    const [feedbackMsg, setFeedbackMsg] = useState();
    const [feedbackStatus, setFeedbackStatus] = useState();

    return ( 
        <div className={showHideClassName}>
            <section className="modal-main">
                <button onClick={() => setFeedbackDisp(false)}>&#10060;</button>
                <h4>Feedback Message </h4>
                <textarea placeholder="ENTER FEEDBACK MESSAGE" rows="6"style={{width:"98%"}} onChange={(e)=>setFeedbackMsg(e.target.value)}></textarea>
                <br />
                <label>Feedback Status: </label>
                <select onChange={(e)=>setFeedbackStatus(e.target.value)}>
                    <option value="Rejected">rejected</option>
                    <option value="Selected">selected</option>
                </select>
                <button  onClick={() => handleEndInterview(feedbackMsg, feedbackStatus)}>END INTERVIEW</button>
                
            </section>
        </div>
    );
}
 
export default FeedbackModal;