import React from "react";
import Cat01 from "./img/cat01.jpg";
import Cat02 from "./img/cat02.jpg";
import Cat03 from "./img/cat03.jpg";

//src 폴더에 이미지가 있는 경우1
function Img01(props) {
  return (
    <div>
      <img src={Cat01} alt="cat01" title="cat01" width="200" />
      <img src={Cat02} alt="cat02" title="cat02" width="200" />
      <img src={Cat03} alt="cat03" title="cat03" width="200" />
    </div>
  );
}

export default Img01;
