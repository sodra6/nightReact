import React from 'react';

function Event01(props) {
    //HTML 인라인 이벤트
    //<태그명 onclick="함수">

    //JSX 이벤트
    //<요소 onClick="함수">

    //1. 매개변수가 없는 함수 선언
    const onEvent01 = () => {
        alert("click");
    }
    //2. 매개변수가 있는 함수(호출시 화살표 함수로 호출하여야 한다)
    const onEvent02 = (res) => {
        alert(res);
    }
    return (
        <div>
            <button onClick={onEvent01} >버튼1</button>
            <hr/>
            <button onClick={ ()=> onEvent02("hi")} >버튼2</button>
            <hr/>
            <button onClick={ ()=> onEvent02(prompt("점수","0~100"))} >버튼3</button>
        </div>
    );
}

export default Event01;