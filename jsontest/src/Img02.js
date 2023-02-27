import React from "react";

//src폴더에 있는 것을 require()를 통해 호출
function Img02(props) {
  return (
    <div>
      <img src={require("./img/cat01.jpg")} alt="cat01" width="200" />
      <img src={require("./img/cat03.jpg")} alt="cat03" width="200" />
      <img src={require("./img/cat02.jpg")} alt="cat02" width="200" />
    </div>
  );
}

export default Img02;
