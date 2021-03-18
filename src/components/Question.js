const Question = ({ question, qno }) => {
    return ( 
        <div className="question">
            <p><b>{qno}</b>) <i>{question.question}</i></p>
        </div>
    );
}
 
export default Question;
