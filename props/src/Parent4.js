import React from 'react';
import Child4 from './Child4';

//1. 부모 컴퍼넌트
//props : 컴포넌트에 전달되는 값 - 부모가 자손에게 내려주는 값
//properties의 준말
//<테그명 props명="변수값">

function Parent4(props) {
    return (
        <div>
            <Child4 name="김석진" birth="1992.12.4" /><hr/>
            <Child4 name="김나준" birth="1994.9.4" /><hr/>
            <Child4 name="김태형" birth="1995.6.4" /><hr/>
            <Child4 /><hr/>
            <Child4 name="차은우" birth="1997.3.30" group="아스트로"/>
        </div>
    );
}

export default Parent4;