import React, { Fragment } from 'react';

/**
 *  ============ JSX의 규칙 =============== 
 * 2. 꼭 닫혀있어야 하는 태그 문법
 * <태그명> : img, input, br 등 <태그명/> or <태그명></태그명>으로 표시
 */
function JSX02_2(props) {
    return (
        <>
            <input type="text"></input>
            <input type="text" />
        </>
    );
}

export default JSX02_2;