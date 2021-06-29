import React from "react";

function Aboutme(){
    return(
        <div className="bg-light my-5">
        <div className="container text-center py-5">
          <h1 className="text-center font-weight-light">
            <span className="text-info">About</span> me
          </h1>
          <div className="lead">I can develop the front and the back of an app</div>
          <div className="row">
            <div className="col-12 col-md-6 px-5 pt-5">
              <h5>What I can do?</h5>
              <p className="text-justify">
                I am a fullstack developer.I can develope websites and
                 apps using my tools i.e. HTML, CSS, Bootstrap, JavaScript and React.
              </p>
            </div>
            <div className="col-12 col-md-6 px-5 pt-5">
              <h5>What am I doing currently?</h5>
              <p className="text-justify">
                I am a Student, currently pursuing my B.Tech degree from 
                Shri Govinram Seksaria Institute of Science and Technology in 
                Information Technology Engineering.
              </p>
            </div>
            <div className="col-12 col-md-6 px-5 pt-5">
              <h5>What do I believe in?</h5>
              <p className="text-justify">
                I believe in Hardwork, Teamwork, Continuous learning, Creativity, 
                Problem solving, Analytical ability, Communication skills, Logical thinking,
                Attention to detail.
              </p>
            </div>
            <div className="col-12 col-md-6 px-5 pt-5">
              <h5>How I can help you?</h5>
              <p className="text-justify">
                I am hardworking and determined about my work. A Tech Enthusiast, loves coding
                and always ready to learn and enhance my Knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Aboutme;