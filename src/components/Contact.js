
import React from "react";
import { useSpring, animated } from 'react-spring';
import "../css/contact.css";
import "../css/white_div.css";
import HomeRight from "./sub_components/HomeRight";
import { BiLogoInstagram, BiPhone } from "react-icons/bi";
import { GrLinkedinOption } from "react-icons/gr";
import { FiMail } from "react-icons/fi";

function Contact (){

    return(
<>
    <div className="education_main_div">
       <div className="home_main_white home_div_left bg-transparent" style={{ overflow: "hidden", display:"flex", flex:"75%"}}>
       <div className="experience_div_div border_contacts">
       <div style={{ padding: "0.5rem" }}>
          <i className="image_contact" />
        </div>
        <div>
        <div className="social_media" style={{    marginTop: "1rem" }}>
       <a href="https://www.instagram.com/diptis140/"><span className="social_icons_span"><BiLogoInstagram className="social_icons_c"/></span></a>
       <a href="tel:+919130778787"><span className="social_icons_span"><BiPhone className="social_icons_c" /></span></a>
       <a href=""><span className="social_icons_span"><GrLinkedinOption className="social_icons_c" /></span></a>
       <a href=""><span className="social_icons_span"><FiMail className="social_icons_c" /></span></a>
     </div>

        </div>
      </div>
       </div>
    </div>
</>
    );
}



export default Contact;