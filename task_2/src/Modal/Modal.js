import React, { Component } from "react";
import "./modal.css";

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
    window.scrollTo({ top: 0 });
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handkeCLick = () => {
    this.props.onClose();
  };

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }
  render() {
    return (
      <>
        <div onClick={this.handkeCLick} className="Overlay"></div>
        <div className="Modal">
          <img src={this.props.children}></img>
          <button className="button" onClick={this.handkeCLick}>
            Close
          </button>
        </div>
      </>
    );
  }
}
