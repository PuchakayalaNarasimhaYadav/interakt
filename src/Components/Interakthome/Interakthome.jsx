import React, { useEffect } from "react";
import homeStyle from './Interakthome.module.css'
import { Button, Stack } from "@mui/material";
import { FaWhatsapp } from "react-icons/fa";
import {Cardsdata,ReasonCards} from "../Interakthome/Interaktdata";
import { useNavigate } from "react-router-dom";
import AOS from 'aos'
export default function Interakthome(){
    const navigate = useNavigate()
    useEffect(()=>{
        AOS.init({
            duration:800,
            easing: 'ease-in-out'
        })
    },[])
    return(
        <div className={homeStyle.home_web}>
            <div>
                <Button
                variant="outlined"
                startIcon={<FaWhatsapp />}
                style={{
                    backgroundColor: "#dafff2",
                    color: "#00a98a",
                    textTransform: "lowercase",
                }}
                >
                Official WhatsApp Business Platform
                </Button>
            </div>
            <div className={homeStyle.landing_frontbanner} data-aos='zoom-in' data-aos-duration='800' data-aos-delay="200" >
            <div className={homeStyle.left_content}>
                <div className={homeStyle.clamp_para}>
                    <p>Transform Conversations</p>
                    <p>into Conversions with</p>
                    <p>WhatsApp <span style={{color:'#007AFF'}}>CRM</span></p>
                </div>
                <div style={{fontSize:'20px'}}>
                    <p>The only full-stack platform to offer a seamless</p>
                    <p>customer experience & grow your business on WhatsApp</p>
                </div>
                <Stack direction='row' spacing={2}>
                    <Button variant="contained" style={{backgroundColor:'#fab534'}} onClick={()=>navigate('/landingpage')}>Start Free Trail</Button>
                    <Button variant="contained" style={{backgroundColor:'black'}}>Sign-up using Shopify</Button>
                </Stack>
            </div>
            <div className={homeStyle.right_img}>
            </div>
        </div>
        <div data-aos='fade-up' data-aos-duration='1000' data-aos-delay="100">
            <div className={homeStyle.title_para}>
                <p>Interakt’s Power-packed WhatsApp Business API Features</p>
                <p className={homeStyle.title_para1}>Interakt on your Woocommerce store</p>
            </div>
            <div className={homeStyle.features_web_content}>
                <div className={homeStyle.cards}>
                    {
                        Cardsdata && Cardsdata.map((item,id)=>(
                            <div className={homeStyle.cards_items} key={id}>
                            <div className={homeStyle.icondata}>
                                <p className={homeStyle.icons}>{item.icon}</p>   
                            </div>
                            <div className={homeStyle.contentdata}>
                                    <h4>{item.title}</h4>
                                    <p>{item.para1}</p>
                                    <p>{item.para2}</p>
                            </div>
                            </div>
                        ))
                    }
                </div>
                <div className={homeStyle.images} data-aos='zoom-in'>
                </div>
            </div> 
        </div>
        <div className={homeStyle.title_para2}>
            <p>More reasons to choose Interakt</p>
        </div>
        <div className={homeStyle.cards_reason_content} >
            
            {
                ReasonCards&& ReasonCards.map((data,index)=>(
                    <div className={homeStyle.card_reason} key={index}>
                        <div className={homeStyle.ico}>
                            <p style={{fontSize:'20px'}}>{data.logo}</p>
                        </div>
                        <div>
                            <h4>{data.heading}</h4>
                        </div>
                        <div>
                            <p>{data.data1}</p>
                            <p>{data.data2}</p>
                            <p>{data.data3}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        </div>
    )
 }