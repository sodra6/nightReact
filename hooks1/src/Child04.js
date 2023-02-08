import React from 'react';

//자손컴포넌트는 key값을 내려받을 수 없음
function Child04({bt}) {
    return (
        <>
            <h4>이름 : {bt.name}</h4>
            <h4>나이 : {bt.age}</h4>
            <h4>메일 : {bt.email}</h4>
            <hr/>
        </>
    );
}

export default Child04;