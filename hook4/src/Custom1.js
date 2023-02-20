import React, { useEffect, useState } from 'react';

//자주사용되는 fetch api를 컴포넌트에 바로 적용한 상태
function Custom1() {
    //데이터를 받는 state 선언
    const [data, setData] = useState(null);
    //json 외부데이터 주소를 받는 변수
    const url = "https://jsonplaceholder.typicode.com/todos";

    //처음 렌더링때만 부르려고 사용
    useEffect(()=>{
        //Fetch API : JSON 데이터 불러올 떄 쓰는 JS API 문법
        //리액트가 내부 json파일을 가져올때는 컴포넌트로 import처리
        //대신 외부서버가 허영한 json파일을 가져올 때는 Fetch API사용
        fetch(url)
        .then((res) => res.json())//데이터 유형 지정
        .then((data) => setData(data))
    },[])
    return (
        <div>
            {
                data && data.map((data)=> {return <p key={data.id}>제목 : {data.title}</p>})
            }
        </div>
    );
}

export default Custom1;