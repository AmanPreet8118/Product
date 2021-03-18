import React, { useEffect, useState } from 'react';
import AddQuestionBtn from './AddQuestionBtn';
import AddQuestionModal from './AddQuestionModal';
import InterviewerHeader from "./InterviewerHeader"
import ListQuestions from './ListQuestions';
import '../css/QuestionBank.css'

const QuestionBank = ({ handleLogout, userid }) => {

    const [questions, setQuestions] = useState([]);
    const [addQuesShow, setAddQuesShow] = useState(false);


    useEffect(() => {
        fetch(`http://35.240.188.169:8000/api/interviewer/questions/${userid}/`, {
            'method': 'GET',
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(res => res.json())
        .then(res => setQuestions(res))
        .catch(err => console.log(err))
    }, [userid])

    const handleAddQues = (question) => {
        const new_ques = { 
            question: question,
            created_by: userid
        };
        setQuestions([...questions, new_ques]);
        fetch(`http://35.240.188.169:8000/api/questions/`,{
            'method':'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(new_ques)
        })
        .then(res => res.json());
        setAddQuesShow(false)
    }

    return ( 
        <div>
            <InterviewerHeader handleLogout={handleLogout} />
            <AddQuestionBtn setdisp={setAddQuesShow}/>
            <AddQuestionModal 
                display={addQuesShow} 
                setdisp={setAddQuesShow}
                handleAddQues={handleAddQues}
            />
            <ListQuestions 
                questions={questions}
            />
        </div>
     );
}
 
export default QuestionBank;
