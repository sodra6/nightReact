import React, { useState, useCallback } from "react";
import produce from "immer";
function Immer03() {
  function reducer(state, action) {
    switch (action.type) {
      case "CREATE":
        //두개의 코드는 동일함, immer를 사용하면 간단해지는 코드가 있고, 지금 보는 Reducer처럼 오히려 코드가 길어지는 경우가있음
        //return state.user.concat(action.user);
        return produce(state, (draft) => {
          draft.users.push(action.user);
        });

      default:
        return state;
    }
  }
  //no immer
  const [todo, setTodo] = useState({
    text: "example",
    check: false,
  });
  const onClick = useCallback(() => {
    setTodo((toeo) => ({
      ...todo,
      check: !todo.check,
    }));
  });

  //onClick을 immer로 대체
  const onClick2 = useCallback(() => {
    setTodo(
      produce((draft) => {
        draft.check = !draft.check;
      })
    );
  }, []);

  return (
    <div>
      <></>
    </div>
  );
}

export default Immer03;
