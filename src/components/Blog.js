import React from "react";

function Blog(props){
    const {name,info,imageurl} = props;
    return(
        <div className="card shadow h-100">
              <img
                className="card-img-top"
                src={imageurl}
                alt-text="Free image"
              />
              <div className="card-body">
                <h4 className="card-title">
                  {name}
                </h4>
                <p className="card-text">{info}</p>
                <a href="/" className=" anchor stretched-link"></a>
              </div>
            </div>
    );
}
export default Blog;