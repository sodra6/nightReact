import React, { useState } from 'react';
import './test.css';

/**
 * 동기와 비동기
 * 1. 동기 : 순서대로 명령이 발생
 * 2. 비동기 : 순서대로 발생되는게 아닌 이벤트에 따라 처리되는 것을 의미
 */

//state는 컴포넌트 내에서 사용할 변수
function Asynchronous(props) {
    //가격 변수
    const price = 18900;

    //값의 변화에 따라 실시간으로 화면에 렌더링 시키기 위해 변화되는 state값을 활용
    const [cnt, setCnt] = useState(1);

    //값의 변화는 리액트 일수잇도록 리액트가 제공하는 함수를 통해서만 이루어져야 함
    //입력상자에 넣을 setState 함수
    const onDataChange = (e) => {
        setCnt(e.target.value);
    }


    const onIncreasCnt = () => {
        setCnt(cnt+1);
        
        //콘솔명령이 먼저 실행되고 함수가 늦게 실행됨 이벤트 루프가 끝나야 값이 변함
        console.log(cnt);
    }
    
    const onDecreaseCnt = () => {
        setCnt(cnt-1);

        console.log(cnt);
    }
    
    return (
        <div className="price_box">
            <h3>라이언 마우스</h3>
            <button type='button' onClick={onDecreaseCnt}>-</button>
            <input type='text' value={cnt} onChange={onDataChange} />
            <button type='button' onClick={onIncreasCnt}>+</button>
            <h4>{cnt}개 {price*cnt}원</h4>
        </div>
    );
}

export default Asynchronous;