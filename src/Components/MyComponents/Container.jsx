import React from "react";
import colors from '../Images/colors.png';
import diet from '../Images/diet_ramnagara.png';
import rvce from '../Images/rvce.png';
import boylearn from '../Images/boylearn.png';
import { NavLink } from "react-router-dom";

function Container(props){

    return <div>
       
        <div className="home_container">
            
            <div className="home_contents">
                <div className="iconImage">
                    <img src={rvce} alt="" />
                    <img src={diet} alt="" />
                    <img src={colors} alt="" />
                </div>
                    <h1>  WELCOME TO OUR <span>WEBSITE</span></h1>
                    <p>Learn,Enjoy and Experience the beauty of education.To begin click on the button below.</p>
                    
                    <div className="logins">
                        <NavLink to={"/login"}><button className="studentlogin">Let's Begin</button></NavLink>
                        
                    </div>
                    
            </div>
            <div className="home_image">
                <img src={boylearn}alt="" />
            </div>
        </div>
    </div>
}

export default Container;
/*  */