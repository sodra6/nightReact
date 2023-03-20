import React from "react";
import { Link } from "react-router-dom";

//header 영역 프리젠테이셔널 컴포넌트
function Header() {
  return (
    <div>
      <h1>
        <Link to="/">LOGO</Link>
        <ul>
          <li>
            <Link to="/live">Live</Link>
          </li>
          <li>
            <Link to="/tv">Tv</Link>
          </li>
          <li>
            <Link to="/movie">Movie</Link>
          </li>
          <li>
            <Link to="paramount">Paramount</Link>
          </li>
        </ul>
      </h1>
    </div>
  );
}

export default Header;
