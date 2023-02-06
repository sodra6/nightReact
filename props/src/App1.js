import React from 'react';
import Condition1 from './Condition1';

//부모컴포넌트 : props 값을 내려줄 컴포넌트
function App1(props) {
    return (
        <div>
            <h1>2월 수학테스트 결과</h1>
            <Condition1 name="김철수" score="90" />
            <Condition1 name="홍길동" score="70" />
            <Condition1 name="박영희" score="80" />
        </div>
    );
}

export default App1;