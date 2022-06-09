import React from "react";
import ReactDOM from "react-dom";

const name = "Tarun Mandhan";
const dt = new Date().toLocaleDateString();
const tm = new Date().toLocaleTimeString();
ReactDOM.render(
  <>
    <h1> My name is {name} </h1>
    <p> The current Date is = {dt} </p>
    <p> The current Time is = {tm} </p>
  </>,
  document.getElementById("root")
);
