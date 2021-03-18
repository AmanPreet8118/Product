import React, { useState } from 'react';
import '../css/AllocatedModal.css';

const Modal=({ show, close, id, date, start_time, finish_time, cname, fun, handleStart})=>{
    const [value, setValue] = useState("");

    const hevent = (event) => {
      setValue(event.target.value)
    }

    const modalClass = show ? "modal display-block" : "modal display-none";
    return(
        <div className={modalClass}>
        <div className="modal_main_allocated">
          <div className="modal-main_allocated">
            <h4 style={{textAlign:'center'}}>Interview Details</h4>
            <ul>
              <li><b>Interview-name</b>: Interview - {id}</li>
              <li><b>date</b>: <i>{date}</i></li>
              <li><b>Start time</b>: <i>{start_time}</i></li>
              <li><b>Finish time</b>: <i>{finish_time}</i></li>
              <li><b>Candidate-name</b>: <i>{cname}</i></li>
            </ul>  
            <button onClick={handleStart} style={{width:"50%",position: "relative",backgroundColor: "#4CAF50",padding:" 10px 20px", display:" block"}} >START</button>
            <form onSubmit={fun}>
              <input type="text" placeholder="Enter Reason If Canceling" required style={{width: "90%", position:"relative", padding: "20px ",  margin: "8px 0",border: "2px solid red" }} value={value} onChange={hevent} />
              <button type="submit" style={{width:"50%" ,position: "relative",backgroundColor: "#f44336" ,padding:" 10px 20px",display: "block", margin: "8px 0"}}>CANCEL</button>
            </form>
            <button style={{width:"100%",position: "relative",textAlign:"center",padding:" 10px 20px" ,display: "block",margin: "8px 0"}}  onClick={close} className="modal-close">CLOSE</button>
          </div>
        </div>
      </div>
    )
}
export default Modal