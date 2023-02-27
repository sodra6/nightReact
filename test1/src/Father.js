import React from "react";
import Child from "./Child";

function Father() {
  return (
    <div>
      <h2>Hello, Father World</h2>
      <Child />
    </div>
  );
}

export default Father;
