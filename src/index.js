import React from "react";
import { render } from "react-dom";
import "./styles.css";
import { App } from "./components/App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
render(<App />, rootElement);
