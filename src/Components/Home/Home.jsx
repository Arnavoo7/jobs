import React from "react";
import { useNavigate } from "react-router-dom";

import "./Home.css";


const Home = () => {


    let navigate = useNavigate();

    return(

        <div className="wholeHome">
          <h1>IT Jobs</h1>

          <div className="section">

            <button className="subSections1" onClick={() => { navigate("/alljobs"); }}>
              <h2>All jobs</h2>
            </button>

            <button className="subSections2" onClick={() => { navigate("/companywise") }}>
              <h2>Company wise jobs</h2>
            </button>
  
            <button className="subSections3" onClick={() => { navigate("/lessthansixty") }}>
              <h2>less than 60%</h2>   
            </button>
  
            <button className="subSections4" onClick={() => { navigate("/nocriteria"); }}>
              <h2>no % criteria</h2>   
            </button>
           
          </div>
          
        </div>
    );
}




export default Home;