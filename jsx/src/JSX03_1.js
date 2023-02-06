import React, { Fragment } from 'react';

/**
 *  ============ JSX의 규칙 =============== 
 * 3. {} - 표현식
 * 내부에 자바스크립트 언어를 작성.
 * 변수, 속성, 수식등을 작성한다.
 * return 영역 안에만 JSX영역임, 그외는 js영역
 * 표현식 내부에 마지막에는 세미콜론(;)을 작성하면 오류
 */
function JSX03_1(props) {
    //엄격한 리액트 문법이라 리렌더링으로 두번뜸, index.js에서 React.StrictMode삭제하면 안뜸
    const userName = prompt('이름을 입력하세요', '유저이름입력');

    return (
        <>
            <h1>5+5={5+5}</h1>
            <h1>5+5={'5'+'5'}</h1>
            <h1>환영합니다. {userName}님</h1>
            <h1>{alert('Hello, World')}</h1>
        </>
    );
}

export default JSX03_1;