
import React from "react";
import "../css/contact.css";
import "../css/white_div.css";
import { BiLogoInstagram, BiPhone } from "react-icons/bi";
import { GrLinkedinOption } from "react-icons/gr";
import { FiMail } from "react-icons/fi";
import { useSpring, animated } from 'react-spring';

function Contact (){

  const springProps1 = useSpring({
    from: { transform: 'translateY(-100%)', opacity: 0 },
    to: { transform: 'translateY(0%)', opacity: 1 },
    config: { duration: 500 },
    delay:300
  });

    return(
<>
    <div className="education_main_div">
       <div className="home_main_white home_div_left bg-transparent" style={{ overflow: "hidden", display:"flex", flex:"75%"}}>
       <animated.div style={ springProps1 } className="experience_div_div border_contacts">
       <div style={{ padding: "0.5rem" }}>
          <i className="image_contact" />
        </div>
        <div>
        <div className="social_media" style={{    marginTop: "1rem" }}>
       <a href="https://www.instagram.com/diptis140/"><span className="social_icons_span"><BiLogoInstagram className="social_icons_c"/></span></a>
       <a href="tel:+919130778787"><span className="social_icons_span"><BiPhone className="social_icons_c" /></span></a>
       <a href="https://www.linkedin.com/in/dipti-shegar-a99577209/"><span className="social_icons_span"><GrLinkedinOption className="social_icons_c" /></span></a>
       <a href="https://mail.google.com/mail/?view=cm&fs=1&to=diptishegar@gmail.com"><span className="social_icons_span"><FiMail className="social_icons_c" /></span></a>
     </div>
     
        </div>
      </animated.div>
       </div>
    </div>
</>
    );
}



export default Contact;