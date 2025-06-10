import emailjs from "emailjs-com";
import React from "react";


export default function ContactUs(){

   function sendEmail(e){
    e.preventDefault();

  emailjs.sendForm('service_y7lepo9', 'template_uw5gdja', e.target, 'q818hBQ7W8rzSP9Vp')
    .then((result)=>{
      console.log(result.text);
    },(error)=>{
      console.log(error.text);
    })
    // e.target(reset);
   }

   return(
    <div>
      <div className="contact-container">
        <form onSubmit={sendEmail}>
            <div className="row pt-5 mx-auto">
              <div className="col-8 form-group mx-auto">
                <input type="text" className="form-control" placeholder="Name" name="name"/>
              </div>
              <div className="col-8 form-group pt-3 mx-auto">
                <input type="email" className="form-control" placeholder="Email Address" name="email"/>
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input type="text" className="form-control" placeholder="Subject" name="subject"/>
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your Message" name="message"/>
              </div>
              <div className="col-8 pt-3 mx-auto">
                <input type="Submit" className="btn btn-info" value="Get in Touch"/>
              </div>
            </div>
        </form>
      </div>
    </div>
   )
}
