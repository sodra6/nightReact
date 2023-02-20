import React from 'react';

//Context API를 쓰지 않고 값을 계속 내려받게 처리 : Prop Drilling
//계속 내려받는 것을 해결하기 위한 방법으로 전역에서 처리하는 Context API를 사용

//최종 자손컴포넌트
function Child({name}){
    return (<div><h1>안녕하세요! {name}님</h1></div>)
}

function Father({name}) {
    return (<div><Child name={name}/></div>);
}

function Grand({name}) {
    return (<div><Father name={name}/></div>);
}

//최상위 컴포넌트 
function Context1(props) {
    return (
        <div>
            <Grand name="홍길동" />
        </div>
    );
}

export default Context1;