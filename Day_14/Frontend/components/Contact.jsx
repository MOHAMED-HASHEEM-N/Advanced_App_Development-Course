import React, { useState } from 'react';
import './Contact.css';
// import ArrowLeftTwoToneIcon from '@mui/icons-material/ArrowLeftTwoTone';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import Navbar from "./Nav";

const Contact = () => {
  const[Name,SetName]= useState("");
  const[Email,SetEmail]=useState("");
  const[Comment,SetComment] = useState("");

  const handleName=(e)=>{
      SetName(e.target.value);
  }
  const handleEmail=(e)=>{
      SetEmail(e.target.value);
  }
  const handleComment=(e)=>{
      SetComment(e.target.value);
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    const data = {
      name:Name,
      email:Email,
      comment:Comment
    }
  }
  return (
    <div>
      <Navbar />

    <div className='wrapper5'>
    <div className='concon'>
      <div className='conbg'>
      <br></br>

    <Link to='/'><IconButton><MeetingRoomIcon/></IconButton></Link>
    <div className="customer-support-page">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>

      <div className='form-group'>
              <label htmlFor="name">Username</label>
              <input type='text' name='fullName' onChange={handleName} required/>
            </div>
            {/* <div className='email'>
              <label htmlFor="email">Email</label>
              <input type='email' name='email' onChange={this.handleInputChange}/>
            </div> */}
            <div className='form-group'>
              <label htmlFor="email">Email</label>
              <input type='email' name='email' onChange={handleEmail} required/>
            </div>
            <div className="form-group">
          <label htmlFor="message">Comment:</label>
          <textarea id="message" rows="4" name='comment' onChange={handleComment} required/>
        </div>

    
        <button type="submit">Submit</button>
      </form>
{/* <Icon /> */}
      </div>
 
      </div>

    </div>  
      {/* <footer className="contact-footer">
      <div className="contact-info">
      <p3><h3>Contact Us:</h3>123 Bank Street, Coimbatore, India</p3>
      <br></br>
      <p3>Phone: 123-456-7890</p3><br></br>
      <p3>Email: info@bankingapp.com</p3>
    </div> */}
    {/* <Icon style={{ color: "white" }} /> */}
    </div>
    {/* </form> */}
    </div>
  );
};

export default Contact;