import React, { Fragment } from "react";
import Child from "./Child";

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
      <div>
        <h1>Parent area</h1>
        <Child name="박홍무" />
      </div>
    </>
  );
}

export default App;
