import { useState } from 'react';
import CvModal from "./CvModal"
import FeedbackModal from "./FeedbackModal"

const OngoingMain = ( { interviewDetails, questions, feedbackDisp, handleSubmit, setFeedbackDisp, showCV, setShowCV, handleEndInterview } ) => {

    const [ notes, setNotes ] = useState();

    return ( 
        <article className="ongoing_interview">
            <section className="interview_details">
                <div>
                    <p>Interviewee Name: {interviewDetails.interviewee_name}</p>
                    <p>Interviewee Email: {interviewDetails.interviewee_email}</p>
                    <p>Video Link: {interviewDetails.video_link}</p>
                </div>
                <div>
                    <button onClick={() => setShowCV(true)}>CV: {interviewDetails.interviewee_cv}</button>
                </div>
            </section>
            <section className="interview_notes">
                <div>
                    <textarea placeholder="ENTER NOTES FOR THE MEETING" onInput={(e) => setNotes(e.target.value)}>

                    </textarea>
                </div>
                <div className="questions">
                    <h4 style={{textAlign:"center"}}>QUESTION BANK</h4>
                    {questions.map((question) => {
                        return (
                            <p key={question.id}>{question.id}: {question.question}</p>
                        )
                    })}
                </div>
            </section>
            <button onClick={() => handleSubmit(notes)}>SUBMIT</button>
            <FeedbackModal display={feedbackDisp} setFeedbackDisp={setFeedbackDisp} handleEndInterview={handleEndInterview} />
            <CvModal showCV={showCV} setShowCv={setShowCV} cvlink={interviewDetails.cv}/>
        </article>
    );
}
 
export default OngoingMain;
