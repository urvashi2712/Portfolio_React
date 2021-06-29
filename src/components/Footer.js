import React from "react";

function Footer(){
    return(
        <footer>
        <div className="container-fluid bg-dark text-white text-center align-items-center">
            <div className="row py-5 ">
                <div className="col ">
                    <p style={{fontSize:"20px"}}>
                        Interested in working with me?
                    </p> 
                    <button className="btn btn-dark border border-light ">
                        Let's Work
                    </button>
                </div>
            </div>
            <div className="row text-light">
                <div className="col-12 col-md-4 p-3">
                    <div className="text-info pb-3">More ideas</div>
                    <a className="anchor d-block text-light" href="/">
                        Blogs
                    </a>
                    <a className="anchor d-block text-light" href="/">
                        Projects
                    </a>
                    <a className="anchor d-block text-light" href="/">
                        Home
                    </a>
                    <a className="anchor d-block text-light" href="/">
                        Contact me
                    </a>
                    <a className="anchor d-block text-light" href="/">
                        Write a reccomendation <i className="fas fa-heart"></i>
                    </a>
                </div>
                <div className="col-12 col-md-4 p-3 text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi similique sequi ab laboriosam placeat saepe dolore reiciendis omnis quaerat, qui ad perspiciatis molestiae beatae praesentium repudiandae autem nam vero illum!
                </div>
                <div className="col">
                    <div className="text-info pb-3">Social</div>
                    <a className="anchor" href="https://www.linkedin.com/in/urvashi-sarda-928aa31b4/">
                        <i className="text-light h1 fab fa-linkedin d-block"></i>
                    </a>
                    <a className="anchor" href="https://github.com/urvashi2712">
                        <i className="text-light h1 fab fa-github d-block"></i>
                    </a>
                    <a href="/" className="anchor">
                        <i className="text-light h1 fas fa-envelope d-block"></i>
                    </a>
                </div>
            </div>
            <div className="row ">
                <div className="col-12 text-muted pt-1">
                    Copyright ○ Urvashi Sarda 2021
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;