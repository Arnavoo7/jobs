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
                <span>IT Jobs</span>
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
                        <span>Thinkitive</span>&nbsp;&nbsp;&nbsp;(Profile:&nbsp;&nbsp;Trainee Software Engineer)
                      </div> 
                  
                    </div>

                    <div className="rightHalf">

                      <span className="dated">12/11/22</span>

                      <div className="buttonDesign">
                    
                        <a href="https://www.thinkitive.com/company/trainee-software-engineer-job-description.html" target="_blank">Apply</a>
                        
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
                        <span>Finideas</span>&nbsp;&nbsp;&nbsp;(Profile:&nbsp;&nbsp;Jr. Software Developer)
                      </div> 
                  
                    </div>

                    <div className="rightHalf">

                      <span className="dated">12/11/22</span>

                      <div className="buttonDesign">
                    
                        <a href="https://www.finideas.com/jobs/jr-software-developer/" target="_blank">Apply</a>
                        
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
                        <span>CSS CORP</span>&nbsp;&nbsp;&nbsp;(Profile:&nbsp;&nbsp;Technical Support Engineer
)
                      </div> 
                  
                    </div>

                    <div className="rightHalf">

                      <span className="dated">12/11/22</span>

                      <div className="buttonDesign">
                    
                        <a href="https://www.csscorp.com/jobs/technical-support-engineer/" target="_blank">Apply</a>
                        
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
                        <span>Quadeye</span>&nbsp;&nbsp;&nbsp;(Profile:&nbsp;&nbsp;Systems Engineer (C++ Developer)

)
                      </div> 
                  
                    </div>

                    <div className="rightHalf">

                      <span className="dated">12/11/22</span>

                      <div className="buttonDesign">
                    
                        <a href="https://www.quadeye.com/careers/?gh_jid=4221125002" target="_blank">Apply</a>
                        
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
                        <span>Accenture</span>&nbsp;&nbsp;&nbsp;(Profile:&nbsp;&nbsp;Associate Software Engg (ASE)

)
                      </div> 
                  
                    </div>

                    <div className="rightHalf">

                      <span className="dated">13/11/22</span>

                      <div className="buttonDesign">
                    
                        <a href="https://indiacampus.accenture.com/register/accenture/allinl1/apply/?event=5551&job=2211" target="_blank">Apply</a>
                        
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
                        <span>IBM</span>&nbsp;&nbsp;&nbsp;(Profile:&nbsp;&nbsp;Associate Software Engineer

)
                      </div> 
                  
                    </div>

                    <div className="rightHalf">

                      <span className="dated">13/11/22</span>

                      <div className="buttonDesign">
                    
                        <a href="https://careers.ibm.com/job/16904358/associate-systems-engineer-remote/?codes=IBM_CareerWebSite" target="_blank">Apply</a>
                        
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
                        <span>Zoho</span>&nbsp;&nbsp;&nbsp;(Profile:&nbsp;&nbsp;Software Developer

)
                      </div> 
                  
                    </div>

                    <div className="rightHalf">

                      <span className="dated">13/11/22</span>

                      <div className="buttonDesign">
                    
                        <a href="https://careers.zohocorp.com/forms/fcc89b5ebd373d598e0224d10f2199d152c193ab04ef6c4888f2775da6c6534f" target="_blank">Apply</a>
                        
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
                        <span>Couchbase</span>&nbsp;&nbsp;&nbsp;(Profile:&nbsp;&nbsp;Graduate Software Engineer


)
                      </div> 
                  
                    </div>

                    <div className="rightHalf">

                      <span className="dated">13/11/22</span>

                      <div className="buttonDesign">
                    
                        <a href="https://jobs.lever.co/couchbase/867eb7a8-6a2c-4f68-a80a-b6543485134c?Source=LI_Jobs" target="_blank">Apply</a>
                        
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
                        <span>Sasken</span>&nbsp;&nbsp;&nbsp;(Profile:&nbsp;&nbsp;Associate Software Engineer


)
                      </div> 
                  
                    </div>

                    <div className="rightHalf">

                      <span className="dated">13/11/22</span>

                      <div className="buttonDesign">
                    
                        <a href="https://careers.sasken.com/job/ASSOCIATE-SOFTWARE-ENGINEER/9681744/" target="_blank">Apply</a>
                        
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
                        <span>Harman</span>&nbsp;&nbsp;&nbsp;(Profile:&nbsp;&nbsp;Intern


)
                      </div> 
                  
                    </div>

                    <div className="rightHalf">

                      <span className="dated">13/11/22</span>

                      <div className="buttonDesign">
                    
                        <a href="https://apply.harman.com/HARMAN/job/IN_Bangalore_Sattva-Knowledge-Court-Bdg/Intern_R-20545-2022" target="_blank">Apply</a>
                        
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
                        <span>WileyEdge</span>&nbsp;&nbsp;&nbsp;(Profile:&nbsp;&nbsp;Java-Software Developer and Python-Production Management


)
                      </div> 
                  
                    </div>

                    <div className="rightHalf">

                      <span className="dated">13/11/22</span>

                      <div className="buttonDesign">
                    
                        <a href="https://edgejobs.wiley.com/en/position/java-software-developer-and-python-production-management-0-1-year-mumbai-bengaluru-karnataka-india-1" target="_blank">Apply</a>
                        
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
                        <span>IBM</span>&nbsp;&nbsp;&nbsp;(Profile:&nbsp;&nbsp;Intern


)
                      </div> 
                  
                    </div>

                    <div className="rightHalf">

                      <span className="dated">13/11/22</span>

                      <div className="buttonDesign">
                    
                        <a href="https://www.linkedin.com/jobs/view/3349148396/" target="_blank">Apply</a>
                        
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
                        <span>Ceridian</span>&nbsp;&nbsp;&nbsp;(Profile:&nbsp;&nbsp;Software Developer Intern


)
                      </div> 
                  
                    </div>

                    <div className="rightHalf">

                      <span className="dated">13/11/22</span>

                      <div className="buttonDesign">
                    
                        <a href="https://www.linkedin.com/jobs/view/3337790078/" target="_blank">Apply</a>
                        
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
                        <span>Protegrity</span>&nbsp;&nbsp;&nbsp;(Profile:&nbsp;&nbsp;Trainee Software Engineer


)
                      </div> 
                  
                    </div>

                    <div className="rightHalf">

                      <span className="dated">13/11/22</span>

                      <div className="buttonDesign">
                    
                        <a href="https://www.linkedin.com/jobs/view/3349008781/" target="_blank">Apply</a>
                        
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
