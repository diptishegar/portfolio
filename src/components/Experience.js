import { BiDownload } from "react-icons/bi";
import React from "react";
import { useTrail, animated } from 'react-spring';
import "../css/experience.css";
import "../css/white_div.css";
import HomeRight from "./sub_components/HomeRight";
import { ExperienceInfo } from "./sub_components/Experience";

function Experience (){

  const trail = useTrail(ExperienceInfo.length,{
    from: { transform: 'translateY(-100%)', opacity: 0 },
    to: { transform: 'translateY(0%)', opacity: 1 },
    config: { duration: 500 },
    trail: 500
  });

    return(
<>
    <div className="education_main_div">
       <div className="home_main_white home_div_left" style={{ display:"flex", flex:"75%"}}>
       <div className="experience_div_div_div">

       {
       trail.map((props, index) =>{
          return(
          <animated.div className="education_item" style={props} key={index}>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center"}}><div style={{ flex:"90%"}}>
            <p className="padding1 edu_items" style={{ fontSize:"25px"}}>{ExperienceInfo[index].institute}</p>
            <p className="padding2 edu_items">{ExperienceInfo[index].year}</p>
            <p className="padding3 edu_items">{ExperienceInfo[index].info}</p>
            </div>
            <div className="download_icon" style={{ flex:"10%"}}><BiDownload /></div>  
            </div>        
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



export default Experience;