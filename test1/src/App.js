import React, { createContext, useState } from "react";
import Father from "./Father";

/**
 *
 * 1_1 div
 * 1_2 fragment
 * 1_3 <></>
 *
 * {} : 표현식
 *
 * ()() : jsx 영역에 함수 실행시 즉시실행함수 사용
 */
function App(props) {
  //자바스크립트 영역
  return (
    <>
      {/* JSX 영역 */}
      <h1>Top area</h1>
      <Father />
    </>
  );
}

export default App;
