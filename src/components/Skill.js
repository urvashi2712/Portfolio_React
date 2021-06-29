import React from "react";

function Skill(props){
    const {image,totalstars,starsearned}=props;
    const abc=[];
    for ( let i=0;i<totalstars;i++){
        if (i<starsearned){
            abc.push(
            <span className="text-info">★</span>
            );
        }
        else{
            abc.push(<span >★</span>);
        }
    }
    return(
        <div className = "bg-light" style={{width:"100px",height:"100px"}}>
                    <img src={image} 
                    alt-text="image" className="rounded-circle" style={{width:"100px",height:"100px"}} />
                    <div>
                        {abc}
                    </div>
        </div>
    );
}

export default Skill;