import React from "react";
import { useSpring, animated } from 'react-spring';
import "../css/education.css";
import "../css/white_div.css";
import HomeRight from "./sub_components/HomeRight";

function Education (){

  const springProps1 = useSpring({
    from: { transform: 'translateY(-100%)', opacity: 0 },
    to: { transform: 'translateY(0%)', opacity: 1 },
    config: { duration: 500 },
    delay:500
  });
  const springProps2 = useSpring({
    from: { transform: 'translateY(-100%)', opacity: 0 },
    to: { transform: 'translateY(0%)', opacity: 1 },
    config: { duration: 600 },
    delay:1000
  });
  const springProps3 = useSpring({
    from: { transform: 'translateY(-100%)', opacity: 0 },
    to: { transform: 'translateY(0%)', opacity: 1 },
    config: { duration: 700 },
    delay:1500
  });
    return(
<>
    <div className="education_main_div">
       <div className="home_main_white home_div_left" style={{ display:"flex", flex:"75%"}}>
       <div className="education_div_div">
          <animated.div className="education_item" style={springProps1}>
          <div></div>
            <p className="padding1 edu_items">Dr DY Patil English Medium School, Ganganagar, Akurdi, Pune</p>
            <p className="padding2 edu_items">2003 - 2017</p>
            <p className="padding3 edu_items">Secondary School Certificate (SSC)</p>
            <div className="white_stick"></div>
          </animated.div>
          
          <animated.div className="education_item" style={springProps2}>
            <p className="padding1 edu_items">Dr DY Patil Junior College of Arts, Commerce and Science, Ganganagar, Akurdi, Pune</p>
            <p className="padding2 edu_items">2017 - 2019</p>
            <p className="padding3 edu_items">Higher Secondary School Certificate (HSC)</p>
            <div className="white_stick"></div>
          </animated.div>
          <animated.div className="education_item" style={springProps3}>
            <p className="padding1 edu_items">AISSMS College Of Engineering, Pune.</p>
            <p className="padding2 edu_items">2019 - 2023</p>
            <p className="padding3 edu_items">BE in Computer Engineering</p>
            <div className="white_stick"></div>
          </animated.div>
        
       
      </div>
       </div>
       <HomeRight />
    </div>
</>
    );
}



export default Education;