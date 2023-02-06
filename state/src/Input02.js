import React, { useState } from 'react';

function Input02(props) {
    //2.상태값을 2개 이상 관리

    const styling = {
        margin : 'auto',
        marginTop : '400px',
        border : '3px solid black',
        padding : '5px',
        width : '500px'
    }

    //target의 속성
    //1. value : 이벤트를 받는 객체의 value값 속성
    //2. name : 이벤트를 받는 객체의 name값 속성 - 이것을 통해서 input태그를 구분

    //상태변수 선언 - 2개의 값을 관리
    const [inputs, setInputs] = useState({

        //기본값 선언, 2개를 작성
        username : '',
        userid : ''
    });

    //비구조화할당으로 객체속성 해체
    const {username, userid} = inputs;

    //데이터 변경함수
    const onDataChange = (e) => {
        const {value, name} = e.target;

        //변화되는 값이 2개여서 객체방식으로 작성
        setInputs({
            ...inputs, //기본 inputs객체를 복사 - 나머지 패턴
            [name] : value//복제해온 값인 name속성 값과 value 값으로 데이터를 수정
        })
    }
    return (
        <form style={styling}>
            {/* 가상돔은 ID 선언하면 안됨, name이라는 속성을 사용해야함 */}
            <input 
                type="text" 
                placeholder='이름입력'
                name='username'
                value={username}
                onChange={onDataChange}
                />
            <input 
                type="text" 
                placeholder='아이디입력'
                name='userid'
                value={userid}
                onChange={onDataChange}
                />
            <h3>값 : {username}({userid})</h3>
        </form>
    );
}

export default Input02;