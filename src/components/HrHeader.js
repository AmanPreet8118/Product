import '../css/HrHeader.css'

const HrHeader = () => {
    return ( 
        <header>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Profile</li>
                    <li>
                        <select>
                            <option value="" selected disabled hidden>Interview status</option>
                            <option>upcoming</option>
                            <option>completed</option>
                        </select>
                    </li>
                    <li>Interviewrs</li>
                    <li>Notify</li>
                </ul>
            </nav>
        </header>
        
     );
}
 
export default HrHeader;