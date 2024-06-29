import { BiDownload } from "react-icons/bi";
import React from "react";
import { useSpring, animated } from 'react-spring';
import "../css/experience.css";
import "../css/white_div.css";
import HomeRight from "./sub_components/HomeRight";

function Experience (){

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
  const springProps4 = useSpring({
    from: { transform: 'translateY(-100%)', opacity: 0 },
    to: { transform: 'translateY(0%)', opacity: 1 },
    config: { duration: 800 },
    delay:2500
  });
    return(
<>
    <div className="education_main_div">
       <div className="home_main_white home_div_left" style={{ display:"flex", flex:"75%"}}>
       <div className="experience_div_div_div">
       
          <animated.div className="education_item" style={springProps1}>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center"}}><div style={{ flex:"90%"}}>
            <p className="padding1 edu_items" style={{ fontSize:"25px"}}> Olcademy, New Delhi, Delhi</p>
            <p className="padding2 edu_items">Sept 2021 - Dec 2021</p>
            <p className="padding3 edu_items">Worked there in the UI/UX team.</p>
            </div>
            <div className="download_icon" style={{ flex:"10%"}}><BiDownload /></div>  
            </div>        
            <div className="white_stick"></div>           
          </animated.div>

          <animated.div className="education_item" style={springProps2}>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center"}}><div style={{ flex:"90%"}}>
            <p className="padding1 edu_items" style={{ fontSize:"25px"}}>Crowdoverflow</p>
            <p className="padding2 edu_items">Aug 2022 - Sept 2022</p>
            <p className="padding3 edu_items">Worked as a frontend developer with ReactJs framework.</p>
            </div>
            <div className="download_icon" style={{ flex:"10%"}}><BiDownload /></div>
            </div> 
            <div className="white_stick"></div>
          </animated.div>
          

          <animated.div className="education_item" style={springProps3}>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center"}}><div style={{ flex:"90%"}}>
            <p className="padding1 edu_items"><span style={{ fontSize:"25px",color: "#e62b1e", fontWeight:"bold"}}>TedXaissmscoe</span></p>
            <p className="padding2 edu_items">March 2022 - Feb 2023</p>
            <p className="padding3 edu_items">Worked in the technical team in club's website development.</p>
            </div> 
            <div className="download_icon" style={{ flex:"10%"}}><BiDownload /></div>
            </div> 
            <div className="white_stick"></div>
          </animated.div> 

          <animated.div className="education_item" style={springProps4}>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center"}}><div style={{ flex:"90%"}}>
            <p className="padding1 edu_items"><span style={{ fontSize:"28px", color:"#ff5f02"}}>teradata.</span></p>
            <p className="padding2 edu_items">Sept 2023 - present</p>
            <p className="padding3 edu_items">Currently working as DBA Trainee since Jan 2024</p>
            </div> 
            <div className="download_icon" style={{ flex:"10%"}}><BiDownload /></div>
            </div> 
            <div className="white_stick"></div>
          </animated.div> 
      </div>
       </div>
       <HomeRight />
    </div>
</>
    );
}



export default Experience;