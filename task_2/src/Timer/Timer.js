import React, { Component } from "react";
import "./timer.css";

class Clock extends Component {
  state = {
    time: new Date().toLocaleString(),
  };

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleString(),
    });
  }

  render() {
    return (
      <div className="clock">
        <p className="time">{this.state.time}</p>
      </div>
    );
  }
}

export default Clock;
