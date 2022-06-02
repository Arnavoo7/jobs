import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import AllJobs from "./Components/AllJobs/AllJobs";
import NoCriteria from "./Components/NoCriteria/NoCriteria";
import CompanyWise from "./Components/CompanyWise/CompanyWise";
import LessThanSixty from "./Components/LessThanSixty/LessThanSixty";
import ScrollTop from "./Components/ScrollTop/ScrollTop";


const App = () => {

  return (
    
    <Router>
      <ScrollTop />
      <Routes>

        <Route path="/alljobs" element={ <AllJobs /> } />
        <Route path="/nocriteria" element={ <NoCriteria /> } />
        <Route path="/companywise" element={ <CompanyWise /> } />
        <Route path="/lessthansixty" element={ <LessThanSixty /> } />

        <Route exact path="/" element={ <Home/> } />

    
      </Routes>
    </Router>
  
  );

}

export default App;
