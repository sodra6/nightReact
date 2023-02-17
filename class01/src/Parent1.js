import React, { Component } from 'react';
import Child2 from './Child2';

//부모컴포넌트
//props는 부모컴포넌트가 자손컴포넌트에게 내려주는 값
class Parent1 extends Component {
    render() {
        const data = [
            {
                name : "김출서",
                age : "30",
                hobby : "넷플릭스 시청",
            },
            {
                name : "김영희",
                age : "26",
                hobby : "수면",
            },
        ]
        return (
            <div>
                <Child2 name="김철수" age="30" hobby="넷플릭스 시청" />
                <hr/>
                <Child2 name="김영희" age="26" hobby="수면" />
                <hr/>
                <Child2 />
            </div>
        );
    }
}

export default Parent1;