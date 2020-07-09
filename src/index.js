import React from "react";
import ReactDOM from "react-dom";
import store from "./reducers/Store";
import "./index.css";
import "./style.css";
import "./flaticon.css";
import "./bootstrap.min.css";
import "./meanmenu.css";
import "./slick.min.css";
import "./responsive.css";
import "./odometer.min.css";
import "./nice-select.css";
import "./magnific-popup.min.css";
import "./fontawesome.min.css";
import "./animate.min.css";

import App from "./App";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
