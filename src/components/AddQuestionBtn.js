const AddQuestionBtn = ({setdisp}) => {
    return ( 
        <div>
            <p className="question_btn" onClick={() => setdisp(true)}>ADD QUESTION</p>
        </div>
     );
}
 
export default AddQuestionBtn;
