import React, { useState } from 'react';
import './test.css';

function State(props) {
    //가격 변수
    const price = 18900;
    const [cnt, setCnt] = useState(1);

    //입력상자에 넣을 setState 함수
    const onDataChange = (e) => {
        setCnt(e.target.value);
    }


    const onIncreasCnt = () => {
        setCnt(cnt+1);
        console.log(cnt);
    }

    const onDecreaseCnt = () => {
        setCnt(cnt-1);
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

export default State;