import React,{useRef,useState} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const[done ,setDone]=useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qk1mfv4', 'template_ab4awrn', form.current, 'DTgu5tke4FWo_uhSG')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });

  };
    return(

        <div className="contact">
    <div className="c-left">
        <span>Get In Touch</span>
        <br />
        <span>Contact Me</span>
    </div>
    <div className='c-right'>
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder='Name' name='from_name' /> <br />
            <input type="email" placeholder='Email' name='user_email' /><br />
            <textarea type="textarea" placeholder='Message'  name='message'/><br />
            <button type="submit" className='button c-btn' >Submit</button>
            <span>{done && 'thanks for contacting me'}</span>
        </form>

    </div>
  </div>
      )
}

export default Contact