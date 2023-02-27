import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Map from "./Map";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";

/* 리액트는 원래 SPA(한페이지로 구성되는 프로그램)
 *Recat Router를 설치해서 페이지 나눔기술을 사용
 * yarn : yarn add react-router-dom
 * npm : npm install reactg-router-dea
 *
 * router의 종류 : BrowserRouter, HashRouter, MemonryRouter, StaticRouter
 * BrowserRouter : HTML를 지원해주는 브라우저 주소 감지(대부분 이걸 사용);
 */

function App(props) {
  return (
    <BrowserRouter>
      {/* Router 기술을 사용하는 모든 컴포넌트 감싸줌 */}
      <Header />
      <Routes>
        {/* 바뀔 컴포는트들을 감싸줌 */}
        <Route path="/" element={<Main />} />
        <Route path="/map/:storeId" element={<Map />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
