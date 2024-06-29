import React from "react";
import HomeRight from "./sub_components/HomeRight.js";
import "../css/white_div.css";
import "../css/home.css";
import Typewriter from "typewriter-effect";

function Home (){
    
    return(
<>
<div className="home_main" style={{ position:"absolute", color:"white"}}>
<div className="home_div_left home_main_white" style={{ overflow: "hidden"}}>
<Typewriter
options={{
    strings: [
        'I\'m working as a DBA Trainee at <span style="font-size:38px; color: #ff5f02">teradata.</span>',
        'I like to code',
        'I love to read novels',
        'I like watching movies',
        'I also can skate!!'
    ],
    autoStart: true,
    loop: true,
}}
            />
</div>
<HomeRight />
</div>
</>
    );
}

export default Home;