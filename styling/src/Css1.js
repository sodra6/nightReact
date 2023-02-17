import React from 'react';


//인라인스타일링 : 요소에 style속성을 바로 작성
//<요소 style={{속성명 : 값}}
function Css1() {
    return (
        <div>
            <h1 style={{
                backgroundColor : 'black',
                color : 'yellow'
            }}>리액트 테스트,</h1>
        </div>
    );
}

export default Css1;