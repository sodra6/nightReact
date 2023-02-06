import React from 'react';

//짧은 조건문 : 논리연산자를 사용한 조건문
//조건식 && 참표현식
//조건식 || 거짓표현식
function JSX05_2(props) {
    //합격만 반환
    const test = window.confirm("결제하시겠습니까?");
    //const test = prompt("점수입력",'0~100');

    return (
        <div>
            {test || <h1>불합격</h1>}
        </div>
    );
}

export default JSX05_2;