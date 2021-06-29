import React from "react";
import Projectcard from "./Projectcard";
import Bank from "../assets/BANK.png";
import Bakery from "../assets/bakery.jpg";
import ToDolist from "../assets/todolist";


function Projectsection(){
  const projects =[{
    id:3,
    title:"Spark's Bank",
    excerpt:"This is my project about a Bank",
    imageurl:Bank,
},
{
  id:1,  
  title:"Bakery Operations",
    excerpt:"This is my project about a Bakery",
    imageurl:Bakery
},
{
    id:2,
    title:"ToDo list",
    excerpt:"This is my project about a ToDo list",
    imageurl:ToDolist
}
]
    return(
        <div className="container text-center my-5">
        <h1 className="font-weight-light">
          My <span className="text-info">Projects</span>
        </h1>
        <div className="lead">I build products. Just like this website</div>
        <div className="row my-5 pt-3">
          {projects.map((project)=>(
            <div key={project.id} className="col-12 col-md-4 my-2">
          <Projectcard title={project.title} 
          excerpt={project.excerpt} 
          imageurl={project.imageurl}/>
             </div>
          ))}
        <div className="my-5pr-2" style={{textAlign : "right"}}>
          {/*// eslint-disable-next-line*/}
          <a href="/" className="anchor text-dark text-right">
            <h5>
              See my projects
              <i className="fas fa-arrow-right align-middle"></i>
            </h5>
          </a>
        </div>
        </div>
    </div>
    );
}
export default Projectsection;