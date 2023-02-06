import React, {useState} from 'react';

//Hooks : 함수 컴포넌트가 리액트의 몇가지 기능에 접근하도록 도와주는 라이브러리
//Hooks 규칙
//1. 함수컴포넌트에만 불러올 수 있다.
//2. 컴포넌트의 최상위 수준에서 호출
//3. Hooks 조건부로 불러올 수 없음

//1. useState : 함수컴포넌트가 사용할 수 없었던 state값 관리를 가능하게 해줌
//state : 컴포넌트가 유동적으로 변경될 자신의 값을 관리

function Counter(props) {

    const styling = {
        width : '200px',
        padding : '10px',
        margin : 'auto',
        border : '3px solid black',
        textAlign : 'center'
    }
    //변수선언 :  상태값 변수, 변화될 상태값 변수를 둘다 선언해야 함
    const [num, setNum] = useState(0);//기본값을 0으로 처리

    //1씩 증가되는 함수
    const onIncrease = () => {
        setNum(num+1);
    }
    
    //1씩 감소되는 함수
    const onDecrease = () => {
        setNum(num-1);
    }

    return (
        <div style={styling}>
            <h1>값 : { num }</h1>
            <button onClick={ onIncrease }>+</button>
            <button onClick={ onDecrease }>_</button>
        </div>
    );
}

export default Counter;