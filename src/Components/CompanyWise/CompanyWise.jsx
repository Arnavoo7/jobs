import React from "react";
import { useNavigate } from "react-router-dom";

import "./CompanyWise.css";

const CompanyWise = () => {

let navigate = useNavigate();

return(
    
    <div className="CompanyWiseWhole">

          <div className="navbarWise">
           
           <div className="navLeftButtonWise">
             <a onClick={() => { navigate("/") }}>Home</a>
           </div>{/*
           <div className="navRightWise">
             <span>IT Jobs (Company wise)</span>
</div>*/}

           </div>

      <h1>Coming soon...</h1>
    </div>
);

};


export default CompanyWise;