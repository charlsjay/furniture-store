import Intro from "../../components/Intro/Intro";
import NavBar from "../../components/NavBar/NavBar";
import { StyledCont } from "../Contact/Contact-styles";
import { StyledSCont } from "../Contact/Contact-styles";
import  add from "../../assets/svgs/add.png";
import phone from "../../assets/svgs/phone.png";
import time from "../../assets/svgs/time.png";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";

function Contact() {
  return (
    <>
      <NavBar />
      <Intro />
      <StyledCont>
       <div>
          <h2>Get In Touch With Us</h2>
          <p>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
      </div>
      </StyledCont>
      <StyledSCont>
    <div className="main-div">

     <div className="right_side">
      <div className="add">
           <img src={add}  className="tag_img" ></img>
           <span className="topF">Address</span><br></br>
           <span>236 5th SE Avenue,</span><br></br>
            <span>New York NY10000,</span><br></br>
            <span>United States</span>
      </div>

      <div className="phone">
      <img src={time} className="tag_img" alt="img-2"></img>
           <span className="topF">Phone</span><br></br>
           <span>Mobile: +(84) 546-6789</span><br></br>
           <span> Hotline: +(84) 456-6789 </span>
              
      </div>


      <div className="time">
           <img src={phone} className="tag_img" alt="img-3"></img>
           <span className="topF">Working Time</span><br></br>
           <span>Monday-Friday: 9:00 - 22:00</span><br></br>
             <span>Saturday-Sunday: 9:00 - 21:00</span>
           
              
      </div>

      </div>


      <form className="Contact-form">

       <p>Your Name </p>
  
        <input type="text" placeholder="Abc"/>
          <p>Email</p>
         <input type="email" placeholder="Abc@def.com"/>
        <p>Subject</p>
       <input type="text" placeholder="This is an optional"/>
        <p>Message</p>
       <input type="text-area" placeholder="Message"/>
       <input className="submit-btn" type="submit" value="Submit" />

      </form>

      </div> 
      </StyledSCont>
      <Banner />
      <Footer />

    </>
  );
}

export default Contact;
