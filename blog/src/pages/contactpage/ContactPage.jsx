import Navbar from '../../Navabar/Navbar';
import './contactpage.css'
function ContactPage(){
    return(
        <>
        <title>Contact</title>
        <Navbar/>
        <div className="contact-container">
            <p className="name">Name : Ahsanulhaq</p>
            <p className="email">Email : ulhaqahsan276@gmail.com</p>
            <p className="mobileno">Mobile No : 0300-1234567</p>
            <p className="cnic">CNIC : 12345-123232-9</p>
        </div>
        </>
    )
}

export default ContactPage;