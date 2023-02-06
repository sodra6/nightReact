import React, { Fragment } from 'react';

/**
 *  ============ JSX의 규칙 =============== 
 * 4. 표현식 안의 주석은 /* *\/ 만 가능
 */
function JSX05_1(props) {
    //엄격한 리액트 문법이라 리렌더링으로 두번뜸, index.js에서 React.StrictMode삭제하면 안뜸
    const score = prompt("점수를 입력하세요", '0~100');
    return (
        <>
            {score >= 80 ? <h1>합격</h1> : <h1>불합격</h1>}
        </>
    );
}

export default JSX05_1;