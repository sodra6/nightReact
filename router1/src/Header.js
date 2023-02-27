import React from "react";
import { Link } from "react-router-dom";

//<Link /> : a태그를 대신하여 Router기술에서 페이지 이동시켜주는 컴포넌트
//<Link to="경로"/>
function Header(props) {
  return (
    <div>
      <h1>
        <Link to="/">로고</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">main</Link>
        </li>
        <li>
          <Link to="/map/1?new=true">map</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
