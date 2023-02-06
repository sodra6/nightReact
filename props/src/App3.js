import React from 'react';
import Condition3 from './Condition3';

//부모컴포넌트 : props 값을 내려줄 컴포넌트

function App3(props) {
    return (
        <div>
            <h1>고객 이메일 수신여부</h1>
            <Condition3 name="김철수" isEmail={true} />
            <Condition3 name="홍길동" isEmail={false} />
            <Condition3 name="박영희" isEmail />
        </div>
    );
}

export default App3;