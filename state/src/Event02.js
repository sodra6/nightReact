import React from 'react';

function Event02(props) {
    //이벤트 객체 사용
    //addEventListener('이벤트타입명',function(이벤트객체){})

    const test = (a,e) => {
        alert(a);
        alert(e.type);//type : 이벤트 객체의 이벤트타입을 반환하는 속성
    }

    return (
        <div>
            <button onClick={(event) => test('Hi',event)}>클릭</button>
        </div>
    );
}

export default Event02;