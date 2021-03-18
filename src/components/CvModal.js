const CvModal = ({ showCV, setShowCv }) => {
    const showHideClassName = showCV? "modal show-block" : "modal show-none";
    const url = "https://docs.google.com/document/d/e/2PACX-1vSgqDCc03W86_JnrbqhbZSFZQz-R88WKgIw04ZueeP7z1t5CNZz-oN3Tk2qc61k5H5cQLA5Y4B6wQs3/pub?embedded=true"

    return ( 
        <div className={showHideClassName}>
            <section className="modal-main-cv">
                <button onClick={() => setShowCv(false)}>&#10060;</button>
                <h4 style={{textAlign:"center"}}>RESUME</h4>
                <iframe title="Resume" src={url} style={{width: "99%", height: "300px"}}></iframe>
                <button  onClick={() => setShowCv(false)}>CLOSE</button>
            </section>
        </div>
    );

}
 
export default CvModal;
