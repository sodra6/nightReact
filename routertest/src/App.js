import React from "react";
import { Router } from "react-router-dom";
import About from "./About";
import Home from "./Home";
//React(SPA) - 싱글페이지 어플리케이션
//기본적으로는 페이지 이동이 안되는 프로그램
//페이지 이동기술을 도와주는 라이브러리 : react-router
//yarn add react-router-dom

//<Route path="" component={}>
function App(props) {
  return (
    <div>
      <Router path="/" exact={true} component={Home} />
      <Router path="/about" component={About} />
    </div>
  );
}

export default App;
