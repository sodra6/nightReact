import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux"; //가운데 줄 들어가도 틀린 것 아님
import { Provider } from "react-redux"; //리액트 프로젝트에 redux 적용
import rootReducer from "./modules"; //모듈 불러옴
import { composeWithDevTools } from "redux-devtools-extension";

//한앱당 하나의 스토어 생성
const store = createStore(rootReducer, composeWithDevTools());

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
