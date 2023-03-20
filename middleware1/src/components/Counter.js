import React from 'react';

//프리젠테이션널 컴포넌트 : 스토어에 직접 접근하지 않고, Props로 데이터를 내려받는 컴포넌트, 실제 UI요소를 구성하는 컴포넌트
function Counter({ number, onIncrease, onDecrease }) {
    return (
        <div>
            <h1>{ number }</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;