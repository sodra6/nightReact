import React, { useState } from "react";

function Child() {
  const [value, setValue] = useState();
  const onChangeVal = e => {
    setValue(e.target.value);
  };
  return (
    <div>
      <h1>hello, Child world</h1>
      <h2>{value}</h2>
      <input value={value} onChange={onChangeVal} />
    </div>
  );
}

export default Child;
