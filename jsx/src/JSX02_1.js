import React, { Fragment } from 'react';

/**
 *  ============ JSX의 규칙 =============== 
 * 2. 꼭 닫혀있어야 하는 태그 문법
 * 시작태그 종료태그로 짝을 이룸
 * ex) <h1>Hello, World -> error!!
 */
function JSX02_1(props) {
    return (
        <>
            <h1>Hello, World</h1>
        </>
    );
}

export default JSX02_1;