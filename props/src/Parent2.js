import React from 'react';
import Child3 from './Child3';

//1. 부모 컴퍼넌트
//props : 컴포넌트에 전달되는 값 - 부모가 자손에게 내려주는 값
//properties의 준말
//<테그명 props명="변수값">

function Parent2(props) {
    return (
        <div>
            <Child3 name="김석진" birth="1992.12.4" group="BTS"/><hr/>
            <Child3 name="김나준" birth="1994.9.4" group="BTS"/><hr/>
            <Child3 name="김태형" birth="1995.6.4" group="BTS"/>
        </div>
    );
}

export default Parent2;