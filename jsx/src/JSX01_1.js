import React from 'react';

//JSX(JavaScript XML) : 리액트에서 UI를 표현할 때 쓰는 문법
//JSX를 반드시 써야하는건 아니지만 사용하면 더 쉽게 리액트를 활용 할 수 있다.(html이 아님 xml이라는 언어를 사용)

/**
 *  ============ JSX의 규칙 ===============
 *  1. 꼭 태그는 최상위 태그로 감싸줘야 한다 
 *      1_1) 스타일링에 문제가 발생할수 있다. 
 */

function JSX01_1(props) {
    return (
        <div>
            <h1>Hello, World</h1>
            <h1>Hello, World</h1>
        </div>
    );
}

export default JSX01_1;