import React, { createContext, useContext } from 'react';

//1. context 생성 : createContext()
//2. context 조회 : useContext()

//Context API : 리액트가 전역적으로 사용하고 싶은 특정 값(Props, state)을 관리
//1. createContext, useContext import처리
//2. 전역변수로 생성 createContext() 생성 - 이때 인수로 기본값을 지정가능
//3. 값을 사용하고 싶은 컴포넌트에서 useContext(전역 createContext변수) 생성
//4. 내보낼 최상위 컴포넌트에서 Propvider컴포넌트로 렌더링 컴포넌트를 감싸줌

//전역에 createContext();
const Name = createContext('김철수'); //기본값 지정


//최종 자손컴포넌트
function Child(){
    const name = useContext(Name);
    return (<div><h1>안녕하세요! {name}님</h1></div>)
}

function Father() {
    return (<div><Child /></div>);
}

function Grand() {
    return (<div><Father /></div>);
}

//최상위 컴포넌트
function Context2(props) {
    return (
        <Name.Provider value='홍길동'>
            <Grand />
        </Name.Provider>
    );
}

export default Context2;