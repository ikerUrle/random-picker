import React, { useState } from "react";

import "./App.scss";

const App = () => {
  const [options, setOptions] = useState([1, 2, 3, 4]);

  const updateOptions = () => {
    setOptions((prevState) => [...prevState, prevState.length + 1]);
  };

  const getOutput = () => {
    var values = [];
    for (let input of document.getElementsByClassName("option-input")) {
      input.value && values.push(input.value);
    }

    document.getElementById("result").innerText =
      values[Math.floor(Math.random() * values.length)] || "Enter some values!";
  };

  return (
    <div className="app">
      <div className="app-title">
        <div>
          <h1>Random Picker</h1>by{" "}
          <a className="author" href="https://ikerurle.github.io">
            ikerUrle
          </a>
        </div>
        <h1 className="result" id="result"></h1>
      </div>
      <button className="btn-go" onClick={getOutput}>
        Go!
      </button>
      <button className="btn-add" onClick={updateOptions}>
        Add option
      </button>
      <div className="inputs">
        {options.map((option) => (
          <input placeholder={option} className="option-input"></input>
        ))}
      </div>
    </div>
  );
};

export default App;
