import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LivePage from "./pages/LivePage";
import TvPage from "./pages/TvPage";
import MoviePage from "./pages/MoviePage";
import ParamountPage from "./pages/ParamountPage";
import Header from "./components/common/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/live" element={<LivePage />} />
        <Route path="/tv" element={<TvPage />} />
        <Route path="/movie" element={<MoviePage />} />
        <Route path="/paramount" element={<ParamountPage />} />
      </Routes>
    </div>
  );
}

export default App;
