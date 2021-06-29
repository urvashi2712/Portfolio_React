import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import { ModalBody } from "react-bootstrap";
import { ModalTitle } from "react-bootstrap";
import { ModalFooter } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";

class Recc extends Component{
    constructor(props){
        super(props);
        this.state = {
          name:this.props.name,
          rec:this.props.rec,
          desg:this.props.desg,
          comp:this.props.comp,
          show:false
        };
    }
    componentWillMount(){
      document.addEventListener('mousedown',this.handleClick,false);
    }
    componentWillUnmount(){
      document.addEventListener('mousedown',this.handleClick,false);
    }
    handleOpen=()=>{
      this.setState({show :true});
    }
    handleClose=()=>{
      this.setState({show :false});
    }
    handleClick = e => {
      if (this.node.contains(e.target)) return;
      else {
        this.handleClose();
        console.log("Clicked outside");
      }
    };
    render(){
      const {show}=this.state;
        return(
          <div ref={node => this.node = node}>
          <div className="card shadow h-100 " onClick={this.handleOpen}>
          <div className="card-body">
            <h4 className="card-text cut-text">
              {this.props.rec}
            </h4>
            <p className="card-text text-secondary mb-0">{this.props.name}</p>
            <p className="card-text text-secondary">
              {this.props.desg} at {this.props.comp}
            </p>
          </div>
        </div>
        <Modal
        show={show}
        onHide={this.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <div className="align-items-center text-center">
            <h5 className="w-100">
              {this.props.rec}
            </h5>
            <p className="card-text text-secondary mb-0">{this.props.name}</p>
            <p className="card-text text-secondary">
              {this.props.desg} at {this.props.comp}
            </p>
            </div>
        </Modal.Body>
      </Modal>
      </div>
    );}
}

export default Recc;