import { useState } from "react";

const AddQuestion = ({ setdisp, handleAddQues }) => {
    const [newQues, setNewQues] = useState(); 
    
    return ( 
        <article className="add_question">
            <p className="add_ques_close" onClick={() => setdisp(false)}>&#10060;</p>
            <section>
                <label>Enter question:</label>
                <br />
                <form>
                    <textarea onInput={(e) => setNewQues(e.target.value)} rows="15" style={{width:"98%"}} placeholder="Enter a question"></textarea>
                    <p className="add_ques_submit" onClick={() => newQues ? handleAddQues(newQues) : alert("please enter question")}>ADD</p>
                </form>
            </section>
        </article>
     );
}
 
export default AddQuestion;
