import React from "react";
import { useNavigate } from "react-router-dom";

import "./AllJobs.css";

const AllJobs = () => {


    let navigate = useNavigate();

    return(

      <div className="noCriteriaWhole">

          <div className="navbar">
              <div className=" navLeftButton">
                <a onClick={() => { navigate("/") }}>Home</a>
              </div>

              <div className="navRight">
                <span>IT Jobs (no % criteria)</span>
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
                        <span>Model N</span>&nbsp;&nbsp;&nbsp;(Profile:&nbsp;&nbsp;Fresher Multiple)
                      </div> 
                  
                    </div>

                    <div className="rightHalf">

                      <span className="dated">14/07/22</span>

                      <div className="buttonDesign">
                    
                        <a href="https://match.myanatomy.in/corporate/customCampaign/view?publicLink=2a5b962fb55b4ca303d64f8f700c6d74;05e0e7d6e22684b9c51f23c62aaec74a2165f08583d8f65fcb80e66f29d71e8a780d409493e9223952eb59ea736183908392f80413d2b4fea1bd64b1ba7734dd3a4615c8b1c441cdfc9bac69fa97ae802243b9a7be2e3a065f1ef9796b35dc8f63f862e6a9a301e25df46c04195e05268b92c2091e18fecad21d8195216ee9dc4decf55af8bd05512af685f3293846a2cd744b450088ec2dade7c372e1914353331068f98db03625855f6b144779d194&source=offcampusjobs4u.com" target="_blank">Apply</a>
                        
                      </div>

                      <span className="deadline" title="Deadline: not mentioned">D</span>

                    </div>

                  </div>
                  
                </li>

                <hr></hr>


              <li>
                  <div className="whole">

                    <div className="leftHalf">

                      <div className="naming">
                        <span>cvent</span>&nbsp;&nbsp;&nbsp;(Profile:&nbsp;&nbsp;Associate Product Consultant)
                      </div> 
                  
                    </div>

                    <div className="rightHalf">

                      <span className="dated">13/07/22</span>

                      <div className="buttonDesign">
                    
                        <a href="https://www.firstnaukri.com/careers/customised/landingpage/cvent/28june2022/index.html" target="_blank">Apply</a>
                        
                      </div>

                      <span className="deadline" title="Deadline: not mentioned">D</span>

                    </div>

                  </div>
                  
                </li>

                <hr></hr>


              <li>
                  <div className="whole">

                    <div className="leftHalf">

                      <div className="naming">
                        <span>Accenture</span>&nbsp;&nbsp;&nbsp;(Profile:&nbsp;&nbsp;System and Application Services Associate)
                      </div> 
                  
                    </div>

                    <div className="rightHalf">

                      <span className="dated">13/07/22</span>

                      <div className="buttonDesign">
                    
                        <a href="https://indiacampus.accenture.com/myzone/accenture/1/jobs/2183/job-details" target="_blank">Apply</a>
                        
                      </div>

                      <span className="deadline" title="Deadline: not mentioned">D</span>

                    </div>

                  </div>
                  
                </li>

                <hr></hr>


              <li>
                  <div className="whole">

                    <div className="leftHalf">

                      <div className="naming">
                        <span>Ansys</span>&nbsp;&nbsp;&nbsp;(Profile:&nbsp;&nbsp;DevOps Engineer)
                      </div> 
                  
                    </div>

                    <div className="rightHalf">

                      <span className="dated">12/07/22</span>

                      <div className="buttonDesign">
                    
                        <a href="https://careers.ansys.com/job/Pune-DevOps-Engineer-MH-411057/901805800/" target="_blank">Apply</a>
                        
                      </div>

                      <span className="deadline" title="Deadline: not mentioned">D</span>

                    </div>

                  </div>
                  
                </li>

                <hr></hr>


              <li>
                  <div className="whole">

                    <div className="leftHalf">

                      <div className="naming">
                        <span>Thomson Reuters</span>&nbsp;&nbsp;&nbsp;(Profile:&nbsp;&nbsp;Data Scientist)
                      </div> 
                  
                    </div>

                    <div className="rightHalf">

                      <span className="dated">12/07/22</span>

                      <div className="buttonDesign">
                    
                        <a href="https://jobs.thomsonreuters.com/job/16134489/data-scientist-data-analytics-bangalore-in/#tab-701f17e585721fdf1ea" target="_blank">Apply</a>
                        
                      </div>

                      <span className="deadline" title="Deadline: not mentioned">D</span>

                    </div>

                  </div>
                  
                </li>

                <hr></hr>


              <li>
                  <div className="whole">

                    <div className="leftHalf">

                      <div className="naming">
                        <span>Wipro</span>&nbsp;&nbsp;&nbsp;(Profile:&nbsp;&nbsp;Project Engineer)
                      </div> 
                  
                    </div>

                    <div className="rightHalf">

                      <span className="dated">12/07/22</span>

                      <div className="buttonDesign">
                    
                        <a href="https://app.joinsuperset.com/company/wipro/star.html" target="_blank">Apply</a>
                        
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


export default AllJobs;