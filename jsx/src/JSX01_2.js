import React, { Fragment } from 'react';

//JSX(JavaScript XML) : 리액트에서 UI를 표현할 때 쓰는 문법
//JSX를 반드시 써야하는건 아니지만 사용하면 더 쉽게 리액트를 활용 할 수 있다.(html이 아님 xml이라는 언어를 사용)

/**
 *  ============ JSX의 규칙 ===============
 *  1. 꼭 태그는 최상위 태그로 감싸줘야 한다.
 *      1_2) Fragment를 최상위 태그로 처리 - 무거워서 권장하지 X 
 */

function JSX01_2(props) {
    return (
        <Fragment>
            <h1>Hello, World</h1>
            <h1>Hello, World</h1>
        </Fragment>
    );
}

export default JSX01_2;