import React from "react";
import Skill from "./Skill";
import html from "../assets/html5.png"
import css from "../assets/css3.png"
import bootstrap from "../assets/bootstrap4.png"
import react from "../assets/react.png"
import javascript from "../assets/javascript.png"
import python from "../assets/python.png"
import flask from "../assets/flask.png"
import mysql from "../assets/mysql.png"

function Technologystack(){
    const Skills=[
        {
            id:1,
            image:html,
            totalstars:3,
            starsearned:2
        },
        {
            id:2,
            image:css,
            totalstars:3,
            starsearned:2
        },
        {
            id:3,
            image:javascript,
            totalstars:3,
            starsearned:2
        },
        {
            id:4,
            image:bootstrap,
            totalstars:3,
            starsearned:2
        },
        {
            id:5,
            image:react,
            totalstars:3,
            starsearned:2
        },
        {
            id:6,
            image:mysql,
            totalstars:3,
            starsearned:2
        },
        {
            id:7,
            image:python,
            totalstars:3,
            starsearned:2
        },
        {
            id:8,
            image:flask,
            totalstars:3,
            starsearned:2
        },
    ]
    const finalarray=[]
    for(let i=0;i<Skills.length/4;i++){
        let skillrow=Skills.slice(i*4,(i+1)*4);
        finalarray.push(
            <div className="d-flex justify-content-around py-3">
                {
                    skillrow.map(skill=>(
                        <div key={skill.id}>
                        <Skill key={skill.id} image={skill.image}
                        totalstars={skill.totalstars}
                        starsearned={skill.starsearned}/>
                        </div>
                    ))
                }
            </div>
        );
            
        
    }
    return(
        <div className="bg-light w-100 ">
        <div className="container text-center py-5">
            <div className="pb-5">
                <div className="font-weight-light " style={{fontSize: "50px"}}>
                    <span className="text-info">Technology</span>
                     Stack
                </div>
                <div className="lead">
                    I design, develope and deliver with these weapons.
                </div>
            </div>
            {finalarray}
            <div>

            </div>
        </div>
    </div>

    );
}

export default Technologystack;