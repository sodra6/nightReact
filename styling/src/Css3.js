import React from 'react';
import './test.css'

//외부 css문서의 class가져오기
//<요소 className ="클래스명"/>
function Css3() {
    return (
        <div>
            <h1 className='title01'>리액트 테스트1,</h1>
            <h2 className='title02'>리액트 테스트2,</h2>
        </div>
    );
}

export default Css3;