import React, { useEffect } from "react";
import Mystyle from './Home.module.css'
import AOS from "aos";
export default function Home(){
    useEffect(()=>{
        AOS.init({

        })
    })
    return(
        <div className={Mystyle.home_banner}>
            <div className={Mystyle.banner_img} data-aos='zoom-in'>
                <div className={Mystyle.text_clamp} >
                    <p>Transform Conversations </p>
                    <p>into Conversions with </p>
                    <p>WhatsApp</p>
                </div>
                <div className={Mystyle.inside_bnr} data-aos='zoom-out' data-aos-delay='400' data-aos-duration='1500'>

                </div>
                <div className={Mystyle.bng_img} data-aos='zoom-in' data-aos-delay='400' data-aos-duration='1000'>

                </div>
            </div>
        </div>
    )
}