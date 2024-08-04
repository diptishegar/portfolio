import { LazyLoadImage } from 'react-lazy-load-image-component';
import React from "react";
import { useSpring, animated } from 'react-spring';
import "../css/projects.css";
import "../css/white_div.css";
import HomeRight from "./sub_components/HomeRight";
import { Divider } from 'rsuite';
import { Link } from 'react-router-dom';

function Projects (){

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
    delay:2000
  });
    return(
<>
    <div className="education_main_div">
       <div className="home_main_white home_div_left" style={{ display:"flex", flex:"75%"}}>
       <div style={{ top:"7rem", position:"relative"}} className="experience_div_div project_div_div">
       <p className="text_project">Few projects I've worked on😇</p>

       <animated.div className="project_item" style={springProps1}>
          <div className="mobile_project_div" style={{ display: "flex", flexDirection: "row", alignItems: "center"}}><div>
          <div style={{ padding: "0.5rem" }}>
          <Link to="https://kickass-list.netlify.app/Today"><div className='fit_proj_imgs'><LazyLoadImage className="image_proj3 box_shadow_proj_img" /></div></Link>
          </div>
          <Divider vertical />
            </div>
            <div>
            <p className="padding1 edu_items" style={{ fontSize:"25px"}}>KickAss-List</p>
            <p className="padding2 edu_items">2024</p>
            <p className="padding3 edu_items">Created Todolist app using localstorage in ReactJS</p>
            </div></div>        
            <div className="white_stick"></div>           
          </animated.div>

          <animated.div className="project_item" style={springProps2}>
          <div className="mobile_project_div" style={{ display: "flex", flexDirection: "row", alignItems: "center"}}><div>
          <div style={{ padding: "0.5rem" }}>
          <div className='fit_proj_imgs'><LazyLoadImage className="image_proj2 box_shadow_proj_img" /></div>
          </div>
          <Divider vertical />
            </div>
            <div>
            <p className="padding1 edu_items" style={{ fontSize:"25px"}}>Portfolio</p>
            <p className="padding2 edu_items">2024</p>
            <p className="padding3 edu_items">Using ReactJS created a Portfolio of mine.</p>
            </div></div>        
            <div className="white_stick"></div>           
          </animated.div>

          <animated.div className="project_item" style={springProps3}>
          <div className="mobile_project_div" style={{ display: "flex", flexDirection: "row", alignItems: "center"}}><div>
          <div style={{ padding: "0.5rem" }}>
          <div className='fit_proj_imgs'><LazyLoadImage className="image_proj box_shadow_proj_img" /></div>
          </div>
            </div>
            <Divider vertical />
            <div>
            <p className="padding1 edu_items" style={{ fontSize:"25px"}}> Simple Banking System</p>
            <p className="padding2 edu_items">2022</p>
            <p className="padding3 edu_items">
              Simple Banking system which performs, transaction and creates users.
            </p>
            </div></div>        
            <div className="white_stick"></div>           
          </animated.div>

          <animated.div className="project_item" style={springProps4}>
          <div className="mobile_project_div" style={{ display: "flex", flexDirection: "row", alignItems: "center"}}><div>
          <div style={{ padding: "0.5rem" }}>
          <div className='fit_proj_imgs'><LazyLoadImage className="image_proj1 box_shadow_proj_img" /></div>
          </div>
          <Divider vertical />
            </div>
            <div>
            <p className="padding1 edu_items" style={{ fontSize:"25px"}}>BookSafari</p>
            <p className="padding2 edu_items">2021 - 2022</p>
            <p className="padding3 edu_items">Book search application which returns the information available on google of the book</p>
            </div></div>        
            <div className="white_stick"></div>           
          </animated.div>

          


          
      </div>
       </div>
       <HomeRight />
    </div>
</>
    );
}



export default Projects;