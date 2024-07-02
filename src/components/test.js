import React from "react";
import { useTrail, animated, config } from 'react-spring';
import "../css/education.css";
import "../css/white_div.css";
import HomeRight from "./sub_components/HomeRight";
import { TestInfo } from "./testinfo";

function Test (){

  const trail = useTrail( TestInfo.length,{
    from: { transform: 'translateY(-100%)', opacity: 0 },
    to: { transform: 'translateY(0%)', opacity: 1 },
    config: {duration: 500},
    trail: 500
  });
    return(
<>
    <div className="education_main_div">
       <div className="home_main_white home_div_left" style={{ display:"flex", flex:"75%"}}>
       <div className="education_div_div">
       {
       trail.map((props, index) =>{
          return(
            <animated.div key={index} className="education_item" style={props}>
            <div></div>
            <p className="padding1 edu_items">{TestInfo[index].institute}</p>
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



export default Test;