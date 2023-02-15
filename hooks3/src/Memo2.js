import React, { useMemo, useState } from 'react';

//useMemo를 사용해서 값을 재사용
/**
 * useMemo의 문법
 * useMemo(함수, 의존성배열)
 * 1. 빈배열인 경우 : 초기 마운트 되었을때만 계산하고 이후에는 항상 memoization된 값을 꺼내와서 사용
 * 2. 배열에 state나 props가 있는 경우 : 값이 변경될 때마다 변경
 * 일부 메모리를 소비해서 값을 저장하는 방식으로 정말 필요한 경우에 사용(남발시 성능 저하)
 * 
 */
function Memo2() {
    const [x, setX] = useState(1);

    const memoValue = useMemo(()=>{
        return calc(0);
    },[]);
    const value = memoValue * x;
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

export default Memo2;