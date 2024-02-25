import React, { useState } from "react";
import LandingStyle from "./Interaktlanding.module.css";
import { Button,} from "@mui/material";
export default function Interaktlanding() {
  const [firstname,setFirstname] = useState("");
  const [lastname,setLastname] =useState("");
  const [number,setNumber] = useState("");
  const [email,setEmail] = useState("");
  const [formError ,setFormError]=useState({
    firstname:'',
    lastname:'',
    number:'',
    email:''
  })
  function FirstNamehandler(){
    let IsFirstName = firstname && firstname.trim();
    let FirstnameError ="";
    if(!IsFirstName){
        FirstnameError='*enter your firstname'
    }
    setFormError((prev)=>{
      prev.firstname = FirstnameError;
      return Object.assign({},prev)
    })
  }
  function LastNamehandler(){
    let IsLastname =lastname && lastname.trim();
    let LastnameError ='';
    if(!IsLastname){
      LastnameError="*enter your lastname"
    }
    setFormError((prev)=>{
      prev.lastname=LastnameError;
      return Object.assign({},prev)
    })
  }
  function Numberhandler(){
    let IsNumber = number && number.trim();
    let NumberError ='';
    if(!IsNumber){
      NumberError='*enter your number';
    }
    setFormError((prev)=>{
      prev.number=NumberError;
      return Object.assign({},prev)
    })
  }
  function Emailhandler(){
    let IsEmail = email && email.trim();
    let EmailError ='';
    if(!IsEmail){
      EmailError='*enter your valid email address'
    }
    setFormError((prev)=>{
      prev.email=EmailError;
      return Object.assign({},prev)
    })
  }
  const[ formdata ,setFormdata]=useState({
    firstname:'',
    lastname:'',
    number:'',
    email:''
  })
  const handleChange=(e)=>{
    setFormdata({...formdata,[e.target.name]:e.target.value})
    setFirstname(e.target.value);
    setLastname(e.target.value);
    setNumber(e.target.value);
    setEmail(e.target.value);
    FirstNamehandler();
    LastNamehandler();
    Numberhandler();
    Emailhandler();
  }
  
  function Formhandler(event){
    event.preventDefault()
    if(!firstname || !lastname || !number || !email){
      alert("please fill the form")
      return;
    }
    sendDataToServer(formdata);
    setFormdata({
      firstname: '',
      lastname: '',
      number: '',
      email: ''
    });
    setFormError({
      firstname: '',
      lastname: '',
      number: '',
      email: ''
    });
    FirstNamehandler();
    LastNamehandler();
    Numberhandler();
    Emailhandler();
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
                {
                  formError.firstname && <div>
                        <small>{formError.firstname}</small>
                    </div>
                }

                <div>
                <input type='text' placeholder="lastname" name="lastname" value={formdata.lastname} onChange={handleChange} />
                </div>
                {
                  formError.lastname &&<div>
                  <small>{formError.lastname}</small>
                </div>
                }
                
                <div>
                <input type='number' placeholder="number"  name="number" value={formdata.number} onChange={handleChange} />
                </div>
                {
                  formError.number &&
                  <div>
                  <small>{formError.number}</small>
                </div>
                }
                <div>
                <input type='text' placeholder="work email" name='email' value={formdata.email} onChange={handleChange} />
                </div>
                  {
                    formError.email &&<div>
                                    <small>{formError.email}</small>
                                    </div>
                  }
                <div>
                  <Button variant="contained" type="submit" style={{textTransform:'capitalize'}}>Try Interakt for free</Button>
                </div>
              </form>
            </div>
        </div>
    </div>
  );
}
