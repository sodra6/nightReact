import React, { useState } from 'react';

function Input01(props) {

    //1. 상태값을 하나만 갖음

    const styling = {
        width : "300px",
        margin : "auto",
        padding : '10px',
        border : '3px solid black'
    }
    //state 변수 선언
    const [text, setText] = useState('');

    const onDataChange = (e) => {
        //e : 이벤트 객체를 의미하는 매개변수
        //target : 이벤트를 받는 객체를 선택하는 속성
        //value : 폼관련 요소들을 갖고 있는 값 속성
        setText(e.target.value);
    }

    //데이터 리셋시키는 함수 선언
    const onDataReset = () =>{
        setText('');
    }

    return (
        <form style={styling}>

            {/* 매개변수가 있더라도 값을 처리할때만 화살표 함수를 사용 */}
            <input onChange={ onDataChange }
                type="text" 
                value={text}
            />
            <hr/>
            <button
                type='button' 
                onClick={onDataReset}
            >
                DATA RESET
            </button>
            <h3>VALUE : {text}</h3>
        </form>
    );
}

export default Input01;