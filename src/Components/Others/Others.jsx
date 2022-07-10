import React from "react";
import { useNavigate } from "react-router-dom";
import nqt from "../../images/nqt.jpg";
import amazonml from "../../images/amazon.png";

import "../NoCriteria/NoCriteria.css";
import "./Others.css";


const Others = () => {

let navigate = useNavigate();

return(
    
  <div className="CompanyWiseWhole">

          <div className="navbarWise">
           
           <div className="navLeftButtonWise">
             <a onClick={() => { navigate("/") }}>Home</a>
           </div>

          </div>

      <h1>Coming soon...</h1>
  </div>
  
);

};


export default Others;