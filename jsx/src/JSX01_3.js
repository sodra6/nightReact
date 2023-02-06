import React, { Fragment } from 'react';

//JSX(JavaScript XML) : 리액트에서 UI를 표현할 때 쓰는 문법
//JSX를 반드시 써야하는건 아니지만 사용하면 더 쉽게 리액트를 활용 할 수 있다.(html이 아님 xml이라는 언어를 사용)

/**
 *  ============ JSX의 규칙 ===============
 *  1. 꼭 태그는 최상위 태그로 감싸줘야 한다.
 *      1_3) 제일 권장하는 방법
 */

function JSX01_3(props) {
    return (
        <>
            <h1>Hello, World</h1>
            <h1>Hello, World</h1>
        </>
    );
}

export default JSX01_3;