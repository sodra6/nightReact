import React from 'react';

//한개의 파일에 여러개의 컴포넌트를 선언해도 상관 없음
//자손컴포넌트를 위에 쓰면 아래부모컴포넌트가 자손으로 사용 가능
function Bt({bt}){
    return (
        <div>
            <h4>name : {bt.name}</h4>
            <h4>age : {bt.age}</h4>
            <h4>email : {bt.email}</h4>
        </div>
    )
}

function Bts({bts}) {
    return (
        <div>
            {bts.map((bt)=> <Bt key={bt.id} bt={bt}/>)}
        </div>
    );
}

export default Bts;