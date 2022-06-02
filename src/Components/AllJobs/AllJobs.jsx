import React from "react";
import { useNavigate } from "react-router-dom";

import "./AllJobs.css";

const AllJobs = () => {


    let navigate = useNavigate();

    return(

        <div className="jobWallWhole">
           
           <div className="navbarAll">
           
            <div className="navLeftButtonAll">
              <a onClick={() => { navigate("/") }}>Home</a>
            </div>
            <div className="navRightAll">
              <span>IT Jobs (All)</span>
            </div>

            </div>
        
          <h1>Coming soon...</h1>
        </div>

    );
}


export default AllJobs;