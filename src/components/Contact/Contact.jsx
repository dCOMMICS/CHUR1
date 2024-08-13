import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import email_icon from '../../assets/mail-icon.png'
import tel_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png' 
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "97348b23-7f74-4773-b13f-60400b02c090");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };




  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Shoot you shot <img src= {msg_icon} alt=''/></h3>
        <p>
          Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.        
        </p>
        <ul>
          <li> <img src={email_icon} alt=''/> contact@rhodescentre.com</li>
          <li> <img src={tel_icon} alt=''/>+1 123-789-1250</li>
          <li> <img src={location_icon} alt=''/>77 Massachusetts Ave, Cambridge <br/> MA 02139, United States</li>
        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>

          <label>Your name</label>
          <input type="text" name="name" placeholder="Enter your name" required/>

          <label>Telephone Number</label>
          <input type="tel" name="phone" placeholder="000-000-000" required/>

          <label>Write your messages here</label>
          <textarea name="message"rows="10" placeholder='Enter you Message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt=''/></button>

        </form>

        <span>{result}</span>
      </div>
      
    </div>
  )
}

export default Contact
