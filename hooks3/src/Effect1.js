import React, { useState, useEffect } from "react";

//useEffect() : 컴포넌트에서 부작용을 커버
//1. 비동기를 동기로 처리
//2. 데이터 가져올 때 생기는 문제
//3. 타이머 함수에서의 문제
//4. DOM을 직접 업데이트 할 때 문제

//useEffect(함수, 의존성배열)
//useEffectg(function, deps)
//1. 의존성 배열을 안쓰는 경우 - 모든 렌더링에서 처리
/**
 *
 * useEffect(()=>{
 *
 * });
 *
 */

//2. 의존성 배열을 비워두는 경우 - 첫번째 렌더링에서만 사용
/**
 *
 * useEffect(()=>{
 *
 * },[]);
 *
 */
//3. 의존성 배열을 사용하는 경우 - 값이 변경될때 마다
/**
 * useEffect(()=>{
 *
 * },[prop, state]);
 */

//setTimeout의 부작용 해결
//시간뒤의 명령을 한번만 실행하는 함수(메서드)
function Effect1(props) {
  const [count, setCount] = useState(0);

  //3초 뒤에 숫자를 1로 변경
  //1. 계속실행 ==> 컴포넌트의 state값이 바뀌면 리렌더링 되기 때문
  //2. 1씩증가되지 않고 2씩 증가됨 => strictMode 관련
  /*     setTimeout(()=>{
        setCount((c)=>c+1);
    },3000);
 */
  //값이 변경되어도 첫번째 실행때만 실행
  useEffect(() => {
    setTimeout(() => {
      setCount(c => c + 1);
    }, 1000);
  }, []);

  return <div>현재 숫자 : {count}</div>;
}

export default Effect1;
