import React from "react";

function Projectcard(props){
    const {title,excerpt,imageurl} =props;
    return(
            <div className="card shadow h-100">
              {/* eslint-disable-next-line */}
              <img
                className="card-img-top"
                src= {imageurl}
                alt-text="Free image"
              />
              <div className="card-body">
                <h4 className="card-title">
                  {title}
                </h4>
                <p className="card-text">{excerpt}</p>
                <a href="/" className="anchor stretched-link"></a>
              </div>
          </div>
    );
}

export default Projectcard;