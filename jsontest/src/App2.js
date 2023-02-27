import React from "react";
import Bts from "./bts.json";
//로컬파일들은 컴포넌트 갖고오듯 가져오면 된다
//서버 데이터는 이렇게 호출이 불가능

function App2(props) {
  return (
    <div>
      <h3>이름 : {Bts.bts[0].name}</h3>
    </div>
  );
}

export default App2;
