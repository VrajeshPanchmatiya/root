import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import FirstExample from "./Components/FirstExample";
import SecondExample from "./Components/SecondExample";
import ThirdExample from "./Components/ThirdExample";
import ForthExample from "./Components/ForthExample";

ReactDOM.render(
  <React.StrictMode>
    <FirstExample />
    {/* <SecondExample /> */}
    {/* <ThirdExample /> */}
    {/* <ForthExample /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
