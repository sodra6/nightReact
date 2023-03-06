import React from "react";

//프레젠테이셔널 컴포넌트(보여지는 컴포넌트) : Store에 직접적으로 접근하지 않고 Props로 내려받아 처리, 보통 UI로 태그요소들을 표시하려고 작성

function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {
  const onChange = (e) => {
    onSetDiff(parseInt(e.target.value));
  };

  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={onIncrease} type="button">
          증가
        </button>
        <button onClick={onDecrease} type="button">
          감소
        </button>
        <hr />
        <p>증가 숫자 변경</p>
        <input type="number" min="1" value={diff} onChange={onChange} />
      </div>
    </div>
  );
}

export default Counter;
