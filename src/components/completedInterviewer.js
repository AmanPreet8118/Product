import { useEffect, useState } from 'react';
import '../css/completedInterviewer.css';
import CompletedInterviewModal from './completedModal'
import InterviewerHeader from './InterviewerHeader';
import InterviewStatus from './InterviewStatus';

function Completed({ handleLogout, userid }) {
    const [datas,setData] =useState([])
    const [show,setShow] =useState(false);
    const [modalInterview,setModalInterview] = useState(0);
    const [notes,setNotes] =useState([]);
    
      const showModal = (data) =>{
        setShow(true)
        setModalInterview(data)
        fetch(`http://35.240.188.169:8000/api/interview/completed/notes/${data.id}`,{
            'method':'GET',
            headers:{
                'Content-type' :'application/json'
            }
        })
        .then (resp =>resp.json())
        .then(resp => setNotes(resp))
    }
      const closeModal = () => {
        setShow(false)
    }


    useEffect(() =>{
        fetch(`http://35.240.188.169:8000/api/interview/completed/${userid}`,{
            'method':'GET',
            headers:{
                'Content-type' :'Application/json'
            }
        })
        .then (resp =>resp.json())
        .then(resp => setData(resp))

    },[userid])

  return (
    <body>
        <InterviewerHeader handleLogout={handleLogout} />
        <InterviewStatus />
        <h3 style={{marginLeft: "8%"}}>COMPLETED</h3>
        <p className="card_allocated" >
            <div className="container_allocated">Interview-id</div>
            <div className="container_allocated">Date</div>
            <div className="container_allocated">Time</div>
            <div className="container_allocated">Interviewee Name</div>
            <div className="container_allocated">Feedback Status</div>
        </p>
            <div>
                {datas.map(data =>{
                    return (
                        <div>
                        <div onClick={()=>showModal(data)}>
                         <p className="card_allocated" >
                            <div className="item_allocated">Interview - {data.id}</div>
                            <div className="item_allocated">{data.date}</div>
                            <div className="item_allocated">{data.start_time}</div>
                            <div className="item_allocated">{data.interviewee_name}</div>
                            <div className="item_allocated">{data.feedback_status}</div>
                         </p>
                        </div>
                        </div>
                    )
                }) }

                <CompletedInterviewModal modalInterview={modalInterview} notes={notes} show={show} closeModal={closeModal}/>
            </div>
            
    </body>

   
  );
}

export default Completed;


