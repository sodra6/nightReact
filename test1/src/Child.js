import React, { useContext } from "react";
import { gName } from "./App";

function Child() {
  const name = useContext(gName);
  return (
    <div>
      <h1>hello, Child world</h1>
      <h2>my name is {name}</h2>
    </div>
  );
}

export default Child;
