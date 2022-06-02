import React from "react";
import { useNavigate } from "react-router-dom";

import "./LessThanSixty.css";

const LessThanSixty = () => {

let navigate = useNavigate();

return(
    
    <div className="LessThanSixtyWhole">
      
      <div className="navbarLess">
           
            <div className="navLeftButtonLess">
              <a onClick={() => { navigate("/") }}>Home</a>
            </div>
            <div className="navRightLess">
              <span>IT Jobs (less than 60% criteria)</span>
            </div>

      </div>
            
      <h1>Coming soon...</h1>
    </div>
);

};


export default LessThanSixty;