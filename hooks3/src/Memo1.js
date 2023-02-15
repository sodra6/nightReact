import React, { useState } from 'react';

//useMemo() : 연산된 값을 재사용하도록 도와줌
//Memo는 Memoization을 줄여 쓴 것(컴퓨터 프로그램이 동일한 계산을 반복해야 할 때, 이전에 계산한 값을 메모리에 저장함으로써 동일한 계산의 반복 수행을 제거하여 프로그램 실행 속도를 빠르게 하는 기술)
//연산된 값을 재사용하기 때문에 성능 최적화에 사용

//useMemo를 안쓰는 경우
//함수컴포넌트의 순서 : [렌더링 -> 컴포넌트 함수호출 -> 모든내부의 변수초기화]
//현재 코드에서는 value값이 렌더링될때마다 초기화
//calc함수가 반복적으로 호출되니까 느리게 처리
function Memo1() {
    const [x, setX] = useState(1);
    const value = calc(0)*x;

    return (
        <div>
            <h3>값 : {value}</h3>
            <button onClick={()=> setX((a)=>a+1)}>+</button>
        </div>
    );
}

const calc = num => {
    console.log('계산중..');
    for(let i = 0; i<1000000000; i++){
        num += 1;
    }
    console.log('계산완료');
    return num;
}

export default Memo1;