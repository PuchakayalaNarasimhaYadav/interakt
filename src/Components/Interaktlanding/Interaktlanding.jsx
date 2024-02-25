import React, { useState } from "react";
import LandingStyle from "./Interaktlanding.module.css";
import { Button,} from "@mui/material";

export default function Interaktlanding() {
  const[ formdata ,setFormdata]=useState({
    firstname:'',
    lastname:'',
    number:'',
    email:''
  })
  const handleChange=(e)=>{
    setFormdata({...formdata,[e.target.name]:e.target.value})
  }
  
  function Formhandler(event){
    event.preventDefault()

    sendDataToServer(formdata)
  }
  const sendDataToServer = async (formData) => {
    try {
      const response = await fetch('https://your-api-endpoint.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
      
        console.log('Data sent successfully');
      } else {
        console.error('Failed to send data to server');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={LandingStyle.landing_web}>
        <div className={LandingStyle.form_web_data} data-aos='zoom-in'>
            <div className={LandingStyle.img_content}>
              <p className={LandingStyle.clamp_title}>Automate Commerce<br/> on WhatsApp</p>
              <div className={LandingStyle.bg_img}>
              </div>
            </div>
            <div className={LandingStyle.form_content}>
              <form action="" onSubmit={Formhandler}>
                <h4>Contact details</h4>
                <div>
                  <input type='text' placeholder="firstname" name="firstname" value={formdata.firstname} onChange={handleChange} />
                </div>
                <div>
                <input type='text' placeholder="lastname" name="lastname" value={formdata.lastname} onChange={handleChange} />
                </div>
                <div>
                <input type='text' placeholder="number" name="number" value={formdata.number} onChange={handleChange} />
                </div>
                <div>
                <input type='text' placeholder="work email" name='email' vlaue={formdata.email} onChange={handleChange} />
                </div>
                <div>
                  <Button variant="contained" type="submit" style={{textTransform:'capitalize'}}>Try Interakt for free</Button>
                </div>
              </form>
            </div>
        </div>
    </div>
  );
}
