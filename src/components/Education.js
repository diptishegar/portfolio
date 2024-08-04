import React from "react";
import { useTrail, animated, config } from 'react-spring';
import "../css/education.css";
import "../css/white_div.css";
import HomeRight from "./sub_components/HomeRight";
import { EducationInfo } from "./sub_components/EducationInfo";

function Education (){

  const trail = useTrail(EducationInfo.length, {
    from: { transform: 'translateY(-100%)', opacity: 0 },
    to: { transform: 'translateY(0%)', opacity: 1 },
    config: { duration: 500 },
    trail: 500
  });
    return(
<>
    <div className="education_main_div">
       <div className="home_main_white home_div_left" style={{ display:"flex", flex:"75%"}}>
       <div className="education_div_div">
       <p className="text_education">My Education Background 😊</p>
       {
       trail.map((props, index) =>{
          return(
          <animated.div key={index} className="education_item" style={props}>
          <div></div>
            <p className="padding1 edu_items">{EducationInfo[index].institute}</p>
            <p className="padding2 edu_items">{EducationInfo[index].year}</p>
            <p className="padding3 edu_items">{EducationInfo[index].degree}</p>
            <div className="white_stick"></div>
          </animated.div>
          );
       })
       }
      </div>
       </div>
       <HomeRight />
    </div>
</>
    );
}



export default Education;