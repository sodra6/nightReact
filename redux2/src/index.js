import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux"; //틀린것 아님
import { Provider } from "react-redux"; //리액트 프로젝트에 redux를 적용
import counter from "./modules/counter"; //모둘 import
import { composeWithDevTools } from "redux-devtools-extension";

//yarn add redux
//yarn add react-redux
//yarn add redux-devtools-extension

//한 App당 하나의 Store 생성 가능
const store = createStore(counter, composeWithDevTools());

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
