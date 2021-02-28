import axios from "axios";
import React, { useState } from "react";
import "./style.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const fetchApi = () => {
    if (input.length === 0) {
      return;
    }
    setInput("");
    axios
      .get(`http://universities.hipolabs.com/search?country=${input}`)
      .then((response) => setResult(response.data));
  };

  const clear = () => {
    setResult([]);
  };
  return (
    <div className="container">
      <div className="input_block">
        <label className="label">
          <input
            className="input"
            onChange={handleChange}
            type="text"
            value={input}
          ></input>
          <p className="title">Input your country</p>
        </label>
        <div className="button_block">
          <button className="button" onClick={fetchApi}>
            Submit
          </button>
          <button className="button" onClick={clear}>
            Clear
          </button>
        </div>
      </div>
      <ul className="list">
        {result.map((item, indx) => (
          <li className="item" key={indx}>
            <p className="text">#{indx + 1}</p>
            <p className="text">{item.name}</p>
            {item.web_pages.map((link) => (
              <a className="link" href={link}>
                {link}
              </a>
            ))}
            <p className="text">{item.alpha_two_code}</p>
            <p className="text">{item.country}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
