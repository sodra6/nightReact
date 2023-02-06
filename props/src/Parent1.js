import React from 'react';
import Child1 from './Child1';

//1. 부모 컴퍼넌트
//props : 컴포넌트에 전달되는 값 - 부모가 자손에게 내려주는 값
//properties의 준말
//<테그명 props명="변수값">

function Parent1(props) {
    return (
        <div>
            <Child1 name="김석진"/><hr/>
            <Child1 name="김나준"/><hr/>
            <Child1 name="김태형"/>
        </div>
    );
}

export default Parent1;