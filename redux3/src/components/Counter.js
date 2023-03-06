import React from 'react';

//프리젠테이셔널 컴포넌트 : 스토어에 직접적으로 접근하지 않고, Props로 내려받아 처리, 보통 UI로 태그요소들을 표시하려고 작성

function Counter({number, diff, onIncrease, onDecrease, onSetDiff}) {
    const onChange = e => {
        onSetDiff(parseInt(e.target.value,10)); 
        //input태그의 결과값은 문자열
        //더하기 연산자 사용시 연결연산자 처리 
    }

    return (
        <div>
            <h1>{number}</h1>
            <div>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
                <hr />
                <p>증가 숫자 변경</p>
                <input type="number" min="1" value={diff} onChange={onChange} />
            </div>
        </div>
    );
}

export default Counter;