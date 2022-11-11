import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


import "./NoCriteria.css";


const NoCriteria = () => {

    
    let navigate = useNavigate();



    return(

        <div className="noCriteriaWhole">

          <div className="navbar">
              <div className=" navLeftButton">
                <a onClick={() => { navigate("/") }}>Home</a>
              </div>

              <div className="navRight">
                <span>IT Jobs (80 or no criteria)</span>
              </div>
          </div>


          <br></br>
          <br></br>
          <div className="noCenterHeadingActive">
            <h2>Active</h2>
          </div>

          <br></br>

        
         
      

          <div className="noCenterActiveContent">

              <ul>



              <li>
                  <div className="whole">

                    <div className="leftHalf">

                      <div className="naming">
                        <span>Freshworks</span>&nbsp;&nbsp;&nbsp;(Profile:&nbsp;&nbsp;Software Engineering)
                      </div> 
                  
                    </div>

                    <div className="rightHalf">

                      <span className="dated">29/07/22</span>

                      <div className="buttonDesign">
                    
                        <a href="https://jobs.smartrecruiters.com/Freshworks/743999841447791-graduate-trainee-software-engineering" target="_blank">Apply</a>
                        
                      </div>

                      <span className="deadline" title="Deadline: not mentioned">D</span>

                    </div>

                  </div>
                  
                </li>

                <hr></hr>



              </ul>
          </div>
        </div>

         

         
       
    );
}



export default NoCriteria;
