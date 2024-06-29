import {React, Component} from "react";
import "../css/NavbarStyles.css"
import { BsFilterRight, BsXCircle } from "react-icons/bs";
import { FiArrowDownCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import "../css/white_div.css";
import "../css/home.css";

import { DiReact, DiDatabase, DiCode } from "react-icons/di";
import { BiLogoInstagram, BiPhone } from "react-icons/bi";
import { GrLinkedinOption } from "react-icons/gr";
import { FiMail } from "react-icons/fi";

import "../css/Profile.css";

class Navbar extends Component {
    state ={clicked:false, prf_clicked:false};

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    handlePrfClick = () =>{
        this.setState({prf_clicked: !this.state.prf_clicked})
    }
    render(){
    return(
        <>
        <nav style={{ position:"relative", color:"white"}}>
        <div>
            <div>
            <div className="outer_profile_div">
            <div id="profile_div" className={this.state.prf_clicked ?"new_home_right home_main_white active":"new_home_right home_main_white"}>
                <div className="social_media">
                <span><BiLogoInstagram className="social_icons"/></span>
                <span><BiPhone className="social_icons" /></span>
                <span><GrLinkedinOption className="social_icons" /></span>
                <span><FiMail className="social_icons" /></span>
                </div>

                <div className="img_profile_div">
                <i className="image_profile" />
                </div><div style={{ fontSize:"25px", marginTop:"17rem", textAlign: "center", zIndex:"99999", color:"#536F16", fontWeight:"bolder" }}>
                Dipti Sunil Shegar
                </div>

                <div style={{ marginTop:"2%" }} className="icons_div">
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
            </div>
            {this.state.prf_clicked ?
            (<i onClick={this.handlePrfClick} className="hamburger down_arrow">
            <BsXCircle style={{ fontSize: "30px", zIndex: "999999999",position: "relative" }}/>
            </i> ):(
            <i className="close_X">
            <div onClick={this.handlePrfClick} className="down_arrow" style={{
                justifyContent:"center",zIndex: "999999999",position: "relative"
            }}><FiArrowDownCircle style={{ zIndex: "999999999",position: "relative", fontSize: "30px"}}/>
            </div>
            </i>
            )
        }
            



            <ul id="navbar" className={this.state.clicked ?"navbar_ul active":"navbar_ul"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="Experience">Experience</Link></li>
                <li><Link to="Education">Education</Link></li>
                <li><Link to="Projects">Projects</Link></li>
                <li><Link to="Contact">Contact Me</Link></li>
            </ul>
            </div>
        </div>
        <div id="mobile" onClick={this.handleClick} style={{position:"relative", zIndex:"9999"}}>
        {this.state.clicked ?
            (<i className="hamburger">
            <BsXCircle style={{ fontSize: "30px" }}/>
            </i> ):(
            <i className="close_X">
            <BsFilterRight style={{ fontSize: "30px" }}/>
            </i>
            )
        }
        </div>
        </nav>
       
        </>
    );
}
}

export default Navbar;