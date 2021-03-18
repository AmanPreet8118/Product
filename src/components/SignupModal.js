import { Link } from 'react-router-dom';
import '../css/SignupModal.css';

const SignupModal = ({ display, setSignupStatus }) => {

    const showHideClassName = display? "modal_signup show-block" : "modal_signup show-none";

    return (  
        <div className={showHideClassName}>
            <section className="modal-main_signup">
                <p style={{marginLeft: "3%"}}>You have signed up successfully</p>
                <p className="gotologin"><Link to="/" onClick={() => setSignupStatus(false)} style={{textDecoration: "none", color: '#FFFFFF'}}>GOTO LOGIN</Link></p>
            </section>
       </div>
    );
}
 
export default SignupModal;