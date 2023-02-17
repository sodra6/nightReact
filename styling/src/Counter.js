import React, { useReducer } from 'react';

//useReducer() : useState 처럼 state를 관리/업데이트 하는 Hooks
//state를 업데이트하는 로직(setState)을 컴포넌트 밖으로 분리시킬 수 있는 장점이 있음

//문법
//useReducer(리듀서변수,초기값 설정)
//컴포넌트 밖의 함수로 선언
/**
 *      function 리듀서변수(state, action) {
 *          //새로운 상태로 변경하는 로직(setState 로직 작성)
 *      }
 */
//useReducer는 state 및 dispatch method를 반환
//1. state : 컴포넌트에서 사용할 state(상태)
//2. dispatch : reducer 함수를 실행시키며, 컴포넌트 내에서 state의 업데이트를 구현
//3. reducer : 컴포넌트 외부에서 state를 업데이트 하는 로직을 담당하는 함수, state, action 매개변수를 사용하여 기존의 state를 대체할 새로운 state를 반환
// ※※※※ 컴포넌트 내에서 관리해야할 state가 많거나 유동적으로 추가되거나 관리할게 많으면 reducer를 사용하는게 합리적이다.

function reducer(state, action) {
    switch(action.type){
        case 'decreament' :
            return state - 1;
        case 'increament' : 
            return state + 1;
        default :
            return state;
    }
}

function Counter() {
	const style = {
        width: '200px',
        padding: '10px',
        margin: '10px',
        border: '3px solid black',
        textAlign: 'center'
    }

    //state를 reducer로 선언
    const [num, dispatch] = useReducer(reducer, 0);
    
    return (
        <div style={style}>
            <h1>값변화 : { num }</h1>
            <button onClick={()=> dispatch({type:'increament'})}>+</button>
            <button onClick={()=> dispatch({type:'decreament'})}>-</button>
        </div>
    );
}

export default Counter;