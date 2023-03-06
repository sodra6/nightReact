import React from "react";
import CounterContainer from "./containers/CounterContainer";
import TodoesContainer from "./containers/TodoesContainer";

function App() {
  return (
    <div>
      <CounterContainer />
      <br />
      <hr />
      <hr />
      <TodoesContainer />
    </div>
  );
}

export default App;
