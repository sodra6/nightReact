import React, { useRef, useState } from 'react';
import './ref.css';

//useRef : 개발자가 특정 DOM을 선택해야 하는 경우에 사용, banilla JS는 real DOM을 직접적으로 선택하지만 React는 virtaul DOM이고 새롭게 Rerendering 하기 때문에 id가 중복되서 줄 수 없고 선택도 어려움

//DOM을 꼭 선택하야하는 상황
//1. 특정 input에 초점(focus)를 줘야 할 때
//2. 해당 컴포넌트의 위치를 정확히 알아야 할때(ex. 스크롤 box를 조작할때)
//3. Canvas 요소에 그림 그리기

//input태그에 비밀번호를 쳤을 때 비밀번호가 [1234]와 같다면 초록색, 그렇지 않다면 주황색이 뜨게하고 다시 초점받게 처리
function Ref(props) {
    //state선언 - 초기값 
    const [inputs, setInputs] = useState({
        password: '',// 입력상자에 입력되는 값을 담은  - 초기값 비우기
        chkable : false,// 버튼 클릭여부 - 초기값 false
        valid : false,// 유효성 검사 - 초기값 false
    });

    //ref생성 - 특정 DOM인 비밀번호 입력상자에 접근하기 위해
    const passwordInput = useRef();

    //비구조화할당
    const {password, chkable, valid} = inputs;

    const onPassChange = e => setInputs({password : e.target.value});//값만 바뀜, 다른상태값은 버튼을 클릭해야 바뀜

    const onButtonClick = e => {
       e.preventDefault();
       setInputs({
            chkable : true,
            valid : password === '1234' ? true : false 
        });

        //현재의 passwordInput을 받은 요소에 초첨을 이동
        if(!valid) {
            //setInputs({password:''});
            passwordInput.current.focus();
        }
    }

    return (
        <form>
            <input 
                type='password'
                value={password}
                onChange={onPassChange}
                className={chkable && (valid?'success':'failure')}
                ref={passwordInput}
            />
            <button type='submit' onClick={onButtonClick}>검증</button>
            <hr/>
            <h3>현재 입력값 : {password}</h3>
        </form>
    );
}

export default Ref;