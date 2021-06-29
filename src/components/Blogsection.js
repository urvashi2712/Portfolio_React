import React from "react";
import Blog from "./Blog";
import first from"../assets/free-stock-image-1.jpg";
import Second from"../assets/free-stock-image-2.jpg";
import Third from"../assets/free-stock-image-3.jpg";

function Blogsection(){
    const Blogs =[{
        id:3,
        name:"Techiee",
        info:"This is my Blog about Technologies.",
        imageurl:first,
    },
    {
        id:1,  
        name:"TechMee",
        info:"This is my Blog about how to get started in Technology.",
        imageurl:Second
    },
    {
        id:2,
        name:"TechCrush",
        info:"This is my Blog about New Technologies.",
        imageurl:Third
    }
    ]
    return(
      <div className="container text-center my-5">
        <h1 className="font-weight-light">My <span className="text-info">Blogs</span></h1>
        <div className="lead">I share my views on technologies in these blogs</div>
        <div className="row my-5 pt-3">
        {Blogs.map(blog=>(
            <div key={blog.id} className="col-12 col-md-4 my-2">
                <Blog name={blog.name} imageurl={blog.imageurl} info={blog.info} />
            </div>
        ))}
          
            <div className="my-5 pr-2" style={{textAlign : "right"}} >
              <a href="/" className="anchor text-dark text-right">
                <h5 className="text-right">
                   See all blogs
                   <i className="fas fa-arrow-right align-middle"></i>
                </h5>
              </a>
            </div>
          </div>
      </div>
    );
}

export default Blogsection;