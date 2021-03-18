import Question from "./Question";

const ListQuestions = ({ questions }) => {
    var qno = 1;
    return ( 
        <div className="questions_list">
            <h2>Questions:</h2>
            {
                questions.map((question) => (
                    <Question question={question} key={question.id} qno={qno++}/>
                ))
            }
        </div>
    );
}
 
export default ListQuestions;
