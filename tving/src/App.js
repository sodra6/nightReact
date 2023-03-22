import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LivePage from "./pages/LivePage";
import TvPage from "./pages/TvPage";
import MoviePage from "./pages/MoviePage";
import ParamountPage from "./pages/ParamountPage";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

//특정컴포넌트가 아니라 Global 영역에 스타일을 추가하고 싶을 때 사용
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');
  *{ padding: 0;  margin: 0; color: #fff; font-family: 'Noto Sans KR', sans-serif; box-sizing: border-box; }
  body { background: #000; }
  li{ list-style: none; }
  a{ text-decoration: none; }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/live" element={<LivePage />} />
        <Route path="/tv" element={<TvPage />} />
        <Route path="/movie" element={<MoviePage />} />
        <Route path="/paramount" element={<ParamountPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
