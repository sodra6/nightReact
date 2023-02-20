import React from 'react';
import useFetch from './useFetch';

//자주사용되는 fetch api를 컴포넌트에 바로 적용한 상태
function Custom3() {
    //json 외부데이터 주소를 받는 변수
    const [data] = useFetch("https://jsonplaceholder.typicode.com/users");

    return (
        <div>
            {
                data && data.map((data)=> {return (
                    <div key={data.id}>
                        <h4>이름 : {data.name}</h4>
                        <h4>연락처 : {data.phone}</h4>
                        <h4>이메일 : {data.email}</h4>
                        <hr />
                    </div>
                )})
            }
        </div>
    );
}

export default Custom3;