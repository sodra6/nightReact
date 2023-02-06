import React from 'react';
import './test.css';
//테그 문법의 스타일속성 사용
//<태그명 style={{속성명 : 값}}>
function JSX06_1(props) {
    const title = {
        color : "pink",
        backgroundColor : "black",
    }
    return (
        <div className="block">
            <h1 style={{color: 'yellow', backgroundColor: 'black'}}>Hello</h1>
            <h1 style={title}>Hello, Black Pink</h1>
        </div>
    );
}

export default JSX06_1;