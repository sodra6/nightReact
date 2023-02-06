import React from 'react';

//2. 자식 컴포넌트
//react가 갖고있는 매개변수 - props(부모의 값 전달)
function Child1(props) {
    return (
        <div>
            <h3>안녕하세요. 제 이름은 {props.name} 입니다.</h3>
        </div>
    );
}

export default Child1;