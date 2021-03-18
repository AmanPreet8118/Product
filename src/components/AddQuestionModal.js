import '../css/AddQuestionModal.css'
import AddQuestion from './AddQuestion';
const AddQuestionModal = ({ display, setdisp, handleAddQues }) => {
    const showHideClassName = display? "modal-add_ques show-block" : "modal-add_ques show-none";

    return ( 
        <div className={showHideClassName}>
            <section className="modal-main-add_ques">
                <AddQuestion setdisp={setdisp} handleAddQues={handleAddQues}/>
            </section>
        </div>
    );
}
 
export default AddQuestionModal;
