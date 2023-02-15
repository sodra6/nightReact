import React, { useState, useEffect} from 'react';

//작업 제어 - 가상돔이어서 리렌더링 처리
//1. mount : 컴포넌트가 처음 나타났을 떄를 의미
// - props로 받은 값을 컴포넌트의 로컬 상태로 설정
// - 외부 api요청
// - 라이브러리 사용
// - setInterval()을 통한 반복작업
// - setTimeout() 을 통한 예약작업

//2. unmount : 컴포넌트가 사라질 때를 의미
// - 라이브러리의 인스턴스를 제거
// - setInterval() 제거 -> clearInterval()
// - setTimeout() 제거 -> 

//3. update : 특정 props나 state의 값이 바뀌었다

//자손컴포넌트

function Child({name, id, onRemove}) {

    useEffect(()=>{
        console.log('componant mount');

        return () => {
            console.log('componant unmount');
        };
    },[]);

    return (
        <div>
            <h3>Hello! I'm {name}! / <button onClick={() => onRemove(id)}>Delete</button></h3> 
        </div>
    );
}


function Effect3() {
    const [langs, setLangs] = useState(['react', 'vue', 'angular', 'svelt']);

    //삭제버튼 함수
    const onRemove = id => {
        setLangs(langs.filter((lang,index)=> index !== id));
    };
    return (
        <div>
            {
                langs.map((lang, index) => <Child key={index} name={lang} id={index} onRemove={onRemove}/>)
            }
        </div>
    );
}

export default Effect3;