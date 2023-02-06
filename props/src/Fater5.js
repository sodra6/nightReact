import React from 'react';

//props.children : 부모가 내려준 자손컴포넌트, import로 호출하지않아도 값을 가져올 수 있음
//부모컴포넌트가 강제로 내려준 자손컴포넌트
function Fater5({children}) {
    return (
        <div>
            <h2>여기는 자손데이터</h2> <hr/>
            <div>{children}</div> 
        </div>
    );
}

export default Fater5;