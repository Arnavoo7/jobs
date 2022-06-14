import React from "react";
import { useNavigate } from "react-router-dom";
import nqt from "../../images/nqt.jpg";
import amazonml from "../../images/amazon.png";

import "../NoCriteria/NoCriteria.css";
import "./Others.css";


const Others = () => {

let navigate = useNavigate();

return(
    
    <div className="Owhole">
      
      <div className="navbar">
        <div className=" navLeftButton">
          <a onClick={() => { navigate("/") }}>Home</a>
        </div>

        <div className="navRight">
          <span className="ONavText">Exams & Contests</span>
        </div>
      </div>

      
      <div className="OSsection">
        
        {/* 1st */}
        <div className="OSsubSection1">

          <span className="Active0">Active</span>
          
          <div className="together">
          <p className="p0">IT</p>
          <p className="p1">Deadline: 25th June, 22</p>
          <p className="p2">Test Date: 10th July, 22</p>
          </div>
          
          <img src={nqt}  alt="nqt_logo" className="nqtImg" />
        

          <a className="btn1" href="https://learning.tcsionhub.in/hub/national-qualifier-test/it-career-readiness-pack/" target="_blank">Apply</a>
                 
        </div> 

         {/* 2nd */}
        <div className="OSsubSection2">

          <span className="Active0">Active</span>

          <div className="together">
          <p className="p0">BFS</p>
          <p className="p1">Deadline: 25th June, 22</p>
          <p className="p2">Test Date: 10th July, 22</p>
          </div>
          
          <img src={nqt}  alt="nqt_logo" className="nqtImg" />
          
          <a className="btn1" href="https://learning.tcsionhub.in/hub/national-qualifier-test/bfs-career-readiness-pack/" target="_blank">Apply</a>
                 
        </div>


        {/* 3rd */}
        <div className="OSsubSection3">

          <span className="Active0">Active</span>

          <div className="together">
          <p className="p3">Amazon ML Summer School India</p>
          <p className="p1">Deadline: 18th June, 22</p>
          <p className="p2">Selection Test: 18th June, 22</p>
          </div>

          <img src={amazonml}  alt="nqt_logo" className="amazonml" />

          <a className="btn1" href="https://xathon.mettl.com/event/amazonmlsummerschool" target="_blank">Apply</a>

        </div> 


       



        
      </div>

    </div>
);

};


export default Others;