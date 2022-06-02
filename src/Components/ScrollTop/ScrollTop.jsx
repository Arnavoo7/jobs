import React, { useState, useEffect } from "react";
import up from "../../images/up.png";

import "./ScrollTop.css";


const ScrollTop = () => {

    const [visible, setVisible] = useState(false);


    const scrollVisibility = () => {

        if(window.pageYOffset > 220)
        {
            setVisible(true);
        }
        else
        {
            setVisible(false);
        }
    }



    const ScrollToTop = () => {

        window.scrollTo({

            top:0,
            behavior:"smooth",
        });
    };


    useEffect( () => {

        window.addEventListener("scroll", scrollVisibility);

        return () => {
            window.removeEventListener("scroll", scrollVisibility);
        }
    })


    return(
        <div className="ScrollWhole">
             {/* uparrow functionality */}
            <img src={ up } alt="up-arrow-image" className={ visible ? "upImg2" : "upImg1" } onClick={ ScrollToTop } />
        </div>
    );
}



export default ScrollTop;