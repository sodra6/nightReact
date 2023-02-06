import React from 'react';

//2. 자식 컴포넌트
//react가 갖고있는 매개변수 - props(부모의 값 전달)

//비구조화할당 : 객체나 배열을 해체해서 각각 변수에 담는것(ES6)
//const 객체변수명 = { 속성 : 값, 속성2 : 값2, 속성3 : 값3 }
//const {변수명1, 변수명2, 변수명3} = 객체변수명
function Child3({name,group,birth}) {
    return (
        <div>
            <h3>이름은 {name} 입니다.</h3>
            <h3>그룹은 {group} 입니다.</h3>
            <h3>생일은 {birth} 입니다.</h3>
        </div>
    );
}

export default Child3;