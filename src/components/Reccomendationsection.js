import React from "react";
import Reccomendation from "./Reccomendation";

function Reccomendationsection(){
    const reccomendation=[
        {
            id:1,
            rec:"He is a good engineer as well as a good person.",
            name:"Random Guy 1",
            desg:"CEO",
            comp:"ABC company"
        },
        {
            id:2,
            rec:"He is an excellent developer",
            name:"Random Guy 2",
            desg:"Director",
            comp:"ABC Company"
        },
        { 
            id:3,
            rec:"He is a lazy pe3rson.",
            name:"Random Guy 3",
            desg:"Manager",
            comp:"ABC company"
        },
    ]
    return(
        <div className="container-fluid my-5 ">
        <div
          className="row text-center py-5 d-flex flex-nowrap overflow-auto scrollbar"
        >
        {reccomendation.map(recc=>(
            <div className="col-12 col-md-4" key={recc.id}>
                <Reccomendation rec={recc.rec} name={recc.name} desg={recc.desg} comp={recc.comp}/>
            </div>
        ))}
          
        </div>
    </div>

    );
}

export default Reccomendationsection;