import React, { useEffect, useState } from 'react';
import './test.css';

/**
 * 동기와 비동기
 * 1. 동기 : 순서대로 명령이 발생
 * 2. 비동기 : 순서대로 발생되는게 아닌 이벤트에 따라 처리되는 것을 의미
 * 
 * useEffect는 react사용시 구성요소에서 생기는 부작용을 커버하는 함수
 * 1) 데이터 가져올 때 발생
 * 2) DOM을 직접 업데이트할 때 발생
 * 3) 타이머 함수에 문제가 생길때
 * 
 * useEffect 문법
 * 1) 값에 대한 전달이 필요없을때 - 모든 렌더링에서 실행
 * ex - useEffect(()=>{})
 * 2) 빈 배열로 처리 - 첫번째 렌더링에서만 실행
 * ex - useEffect(()=>{},[]);
 * 3) props와 state 사용 - 첫번째 렌더링에서도 실행, 값이 변경될때 사용
 * ex - useEffect(() => {},[props, state]);
 */

//state는 컴포넌트 내에서 사용할 변수
function Synchronous(props) {
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
        
        //setTimeout(function(){console.log(cnt)},300);
    }
    
    const onDecreaseCnt = () => {
        setCnt(cnt-1);
    }

    //useEffect로 동기화 처리
    useEffect(()=>{
        //초기 랜더링때 한번 구현, strick-mode라 두번씩 뜸
        console.log(cnt);
    },[cnt]);

    useEffect(()=>{
        //초기 랜더링때 한번 구현, strick-mode라 두번씩 뜸
        console.log(price*cnt);
    });
    
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

export default Synchronous;