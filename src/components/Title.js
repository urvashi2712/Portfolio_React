import React from "react";
import urvashi from "../assets/image.jpg";

function Title(props){
    const {name,leadtext}=props;
    return(
      <div className="container my-5 py-5">
        <div className="row text-center align-items-center">
            <div className="col-12 col-md-6 ">
                {/* eslint-disable-next-line */}
                <img 
                src={urvashi} 
                className="img-fluid w-100 rounded-circle"
                alt-text="Image"/>
            </div>
            <div className="col-12 col-md-6 py-3">
                <div className="font-weight-light" style={{fontSize:"50px"}}>
                    Hi, I am <span className="text-info">{name}</span> 
                </div>
                <div className="font-weight-light">
                    {leadtext}
                </div>
            </div>
        </div>
     </div>
    );
}

export default Title;