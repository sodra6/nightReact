import React from 'react';


//인라인스타일링 : 요소에 style속성에 변수로 지정
//<요소 style={{속성명 : 값}}
function Css2() {
    const styling = {
        backgroundColor : 'black',
        color : 'yellow'
    }
    
    return (
        <div>
            <h1 style={styling}>리액트 테스트,</h1>
        </div>
    );
}

export default Css2;