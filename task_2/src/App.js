import React, { Component } from "react";
import data from "./gallery.json";
import Modal from "./Modal/Modal";
import Timer from "./Timer/Timer";
import "./app.css";
const db = data;

class App extends Component {
  state = {
    modal: false,
    image: null,
    items: JSON.parse(localStorage.getItem("gallery")),
  };

  componentDidMount() {
    if (localStorage.getItem("gallery") === null) {
      localStorage.setItem("gallery", JSON.stringify(db));
      this.setState({
        items: db,
      });
    }
  }

  removeItem = (id) => {
    const str = localStorage.getItem("gallery");
    const gallery = JSON.parse(str);
    console.log(gallery);
    const res = gallery.filter((item) => {
      return item.id !== id;
    });
    console.log(res);
    localStorage.setItem("gallery", JSON.stringify(res));
    this.setState({
      items: res,
    });
  };

  refresh = () => {
    localStorage.setItem("gallery", JSON.stringify(db));
    this.setState({
      items: JSON.parse(localStorage.getItem("gallery")),
    });
  };

  handleClick = (data) => {
    this.setState({
      modal: true,
      image: data,
    });
  };

  close = () => {
    this.setState({
      modal: false,
    });
  };

  render() {
    const { items } = this.state;
    return (
      <div className="container">
        <div className="info">
          <p className="count">{items ? items.length : ""} images</p>
          <Timer />
        </div>
        <ul className="list">
          {items !== null
            ? items.map((item) => (
                <li className="item" key={item.id}>
                  <img
                    onClick={() =>
                      this.handleClick(require(`./img/${item.name}`))
                    }
                    className="image"
                    src={require(`./img/${item.name}`)}
                  ></img>
                  <button onClick={() => this.removeItem(item.id)}>
                    delete
                  </button>
                </li>
              ))
            : ""}
        </ul>
        {this.state.modal ? (
          <Modal onClose={this.close} children={this.state.image} />
        ) : (
          ""
        )}
        <div className="buttonBlock">
          <button onClick={this.refresh}>REFRESH</button>
        </div>
      </div>
    );
  }
}

export default App;
