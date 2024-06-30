import React from "react";
import "../../css/white_div.css";
import "../../css/home.css";

import { DiReact, DiDatabase, DiCode } from "react-icons/di";
import { BiLogoInstagram, BiPhone } from "react-icons/bi";
import { GrLinkedinOption } from "react-icons/gr";
import { FiMail } from "react-icons/fi";


function HomeRight (){
    
    return(
<>
<div className="home_div_right home_main_white" style={{ flex:"20%" }}>
     <div className="social_media">
       <span><BiLogoInstagram className="social_icons"/></span>
       <span><BiPhone className="social_icons" /></span>
       <span><GrLinkedinOption className="social_icons" /></span>
       <span><FiMail className="social_icons" /></span>
     </div>

     <div className="img_profile_div">
     <i style={{ marginTop:"1rem !important" }} className="image_profile" />
     </div><div style={{ fontSize:"25px", marginTop:"17rem", textAlign: "center", zIndex:"99999", color:"#536F16", fontWeight:"bolder", textShadow: "1px 1.5px white;" }}>
     Dipti Sunil Shegar
     </div>

     <div style={{ marginTop:"2%" }} className="education_item icons_div">
        <ul className="icons">
            <span style={{ textAlign:"center", fontSize:"28px", fontWeight:"bold" }}>Skills</span>
            <li className="icon_img_png"><span><DiReact style={{ color: "black",fontSize: "30px" }} /></span><span><span style={{
                    color: "white",
                    fontSize: "18px !important"
            }}>Front-End :</span> Html, CSS, JS, ReactJS</span></li>
            <li className="icon_img_png"><span><DiDatabase style={{ color: "black",fontSize: "30px" }} /></span><span><span
            style={{
                color: "white",
                fontSize: "18px !important"
            }}>Database :</span> SQL</span></li>
            <li className="icon_img_png"><span><DiCode style={{ color: "black",fontSize: "32px" }} /></span><span><span
            style={{
                color: "white",
                fontSize: "18px !important"
            }}>Programming languages :</span> C++, Python</span></li>
        </ul>
     </div>
</div>
</>
    );
}

export default HomeRight;