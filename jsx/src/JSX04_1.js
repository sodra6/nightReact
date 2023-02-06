import React, { Fragment } from 'react';

/**
 *  ============ JSX의 규칙 =============== 
 * 4. 표현식 안의 주석은 /* *\/ 만 가능
 */
function JSX04_1(props) {
    //엄격한 리액트 문법이라 리렌더링으로 두번뜸, index.js에서 React.StrictMode삭제하면 안뜸

    return (
        <>
           <h1>5+5={'5'+'5' /** 여러줄 주석만 입력가능 */}</h1>
        </>
    );
}

export default JSX04_1;