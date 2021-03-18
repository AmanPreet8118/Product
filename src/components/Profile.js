const Profile = ({ interviewer }) => {
    return ( 
        <div className="profile">
            <p><b>Name</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <i>{interviewer.name}</i></p>
            <p><b>Email</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <i>{interviewer.email}</i></p>
            <p><b>Role</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <i>{interviewer.role}</i></p>
            <p><b>Designation</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <i>{interviewer.designation}</i></p>
        </div>
     );
}
 
export default Profile;
