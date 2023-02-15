import React, { useState, useEffect } from 'react';

function Effect4(props) {
    
    const [count,setCount] = useState(0);
    //값이 변경되어도 첫번째 실행때만 실행
    //리렌더링될때마다 명령이 남아 있어서 메모리를 많이 차지함
    useEffect(()=>{
        //마운트시 실행
        let timer = setTimeout(()=>{
            setCount((c)=>c+1);
        }, 3000);

        //언마운트시 제거
        return () => clearTimeout(timer);
    },[]);
    //일부 효과들은 메모리 누수를 줄이기 위해 정리가 필요
    //타이머함수, 이벤트 리스너 등 필요하지 않으면 삭제
    return (
        <div>
            현재 숫자 : {count}
        </div>
    );
}

export default Effect4;