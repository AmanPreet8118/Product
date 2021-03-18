import React, { useEffect, useState } from 'react'
import Modal from './AllocatedModal'
import InterviewerHeader from './InterviewerHeader'
import InterviewStatus from './InterviewStatus'
import "../css/Allocated.css"
const Allocated = ({ handleLogout, userid })=>{
    
    const [state, setState] = useState([])
    const [data, setData] = useState([])
    const [show, setShow] = useState(false);

  const closeModalHandler = () => setShow(false);

    useEffect(() => {
        fetch(`http://35.240.188.169:8000/api/interview/assigned/${userid}`)
        .then(response => response.json())
        .then(resp => setState(resp))
        
    },[userid])

    const postData = () => {
        fetch(`http://35.240.188.169:8000/api/interview/${data.id}/`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'Application/json',
          },
          body: JSON.stringify({
            interview_status:"cancel",
            date: data.date,
            start_time: data.start_time,
            finish_time: data.finish_time,
            interviewee: data.interviewee,
            interviewer: data.interviewer,
            backup_interviewer: data.backup_interviewer
          }),
        })
        .then((res) => res.json())
        .then((res) => console.log("response",res))
    }


    const handleStart = () => {
        fetch(`http://35.240.188.169:8000/api/interview/${data.id}/`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            interview_status:"ongoing",
            date: data.date,
            start_time: data.start_time,
            finish_time: data.finish_time,
            interviewee: data.interviewee,
            interviewer: data.interviewer,
            backup_interviewer: data.backup_interviewer
          }),
        })
        .then((res) => res.json())
        .then((result) => setData(result));
        const new_allocated = state.filter((allocated) => allocated.id!==data.id);
        setState(new_allocated);
        closeModalHandler();
    }


    const fun = (e) => {
        e.preventDefault()
        console.log("in fun")
        postData();
        const new_allocated = state.filter((allocated) => allocated.id!==data.id);
        setState(new_allocated);
        console.log("cancelled",data);
        closeModalHandler();
    };
    
    // console.log(state)
    return (
        <div>
            <InterviewerHeader handleLogout={handleLogout} />
            <InterviewStatus />
            <h3 style={{marginLeft: "8%"}}>ACCEPTED</h3>
            <p className="card_allocated">        
                <div className="container_allocated">Interview-ID</div>
                <div className="container_allocated">Date</div>
                <div className="container_allocated">Start-Time</div>
                <div className="container_allocated">Finish-Time</div>
                <div className="container_allocated">Candidate-Name</div>
                <div className="container_allocated">Status</div>   
            </p>
            
       {state.map( d =>
            <div onClick={ () => {setShow(true); setData(d); console.log("data is",data)} } key={d.id} style={{cursor: "pointer"}}>
                <p className="card_allocated">
                    <div className="item_allocated">Interview {d.id}</div>
                    <div className="item_allocated">{d.date}</div>
                    <div className="item_allocated">{d.start_time}</div>
                    <div className="item_allocated">{d.finish_time}</div>
                    <div className="item_allocated">{d.interviewee_name}</div>
                    <div className="item_allocated">Accepted</div>     
                </p>
            </div>
         )}
        <Modal show={show} close={closeModalHandler}  id={data.id} date={data.date} handleStart={handleStart}
            start_time={data.start_time} finish_time={data.finish_time} cname={data.interviewee_name} fun={fun}/>
        </div>
    )
}
export default Allocated