import React from "react";
import { useNavigate } from "react-router-dom";

import "./Home.css";


const Home = () => {


    let navigate = useNavigate();

    return(

        <div className="wholeHome">
          <h1>Jobs</h1>

          <div className="section">
  
            <button className="subSections3" onClick={() => { navigate("/nocriteria") }}>
              <h2>IT Jobs</h2>   
            </button>

            {/* <button className="subSections1" onClick={() => { navigate("/alljobs"); }}>
              <h2>IT jobs</h2>
            </button>

            <button className="subSections2" onClick={() => { navigate("/companywise") }}>
              <h2>Company wise jobs</h2>
            </button>
  
            <button className="subSections4" onClick={() => { navigate("/others"); }}>
              <h2>others</h2>   
            </button> */}
           
          </div>
          
        </div>
    );
}




export default Home;