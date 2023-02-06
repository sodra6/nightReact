import React from 'react';

//2. 자식 컴포넌트
//react가 갖고있는 매개변수 - props(부모의 값 전달)

//비구조화할당 : 객체나 배열을 해체해서 각각 변수에 담는것(ES6)
//const 객체변수명 = { 속성 : 값, 속성2 : 값2, 속성3 : 값3 }
//const {변수명1, 변수명2, 변수명3} = 객체변수명
function Child4({name,group,birth}) {
    return (
        <div>
            <h3>이름은 {name} 입니다.</h3>
            <h3>그룹은 {group} 입니다.</h3>
            <h3>생일은 {birth} 입니다.</h3>
        </div>
    );
}

//defaultProps : props값을 기본값 지정 - 부모가 값을 내려주지 않아도 기본값으로 처리
//1. 개발자가 값지정을 깜빡할까봐
//2. 나중에 값을 변경하기위해
//3. 대부분의 값은 지정되어 있고 몇개만 변경할 때
//4. 형식은 객체 형식 key:value

Child4.defaultProps = {
    name : '홍길동',
    birth : '1990.1.1',
    group : 'BTS'
}

export default Child4;