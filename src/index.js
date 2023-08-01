import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { store } from "./Store/store";
import { Provider } from "react-redux";
import { library } from "@fortawesome/fontawesome-svg-core"; // Import library from FontAwesome
import { faClock } from "@fortawesome/free-solid-svg-icons"; // Import the clock icon
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the Font Awesome CSS
import "./index.css";

library.add(faClock);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
