import React from 'react';
import useFetch from './useFetch';

//자주사용되는 fetch api를 컴포넌트에 바로 적용한 상태
function Custom2() {
    //json 외부데이터 주소를 받는 변수
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

    return (
        <div>
            {
                data && data.map((data)=> {return <p key={data.id}>제목 : {data.title}</p>})
            }
        </div>
    );
}

export default Custom2;