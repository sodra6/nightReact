import React from 'react';
import Child02 from './Child02';

function Bts02(props) {
    //멤버 배열
    const bts = ['김남준','김석진','민윤기','정호석','박지민','김태형','진정국'];

    //배열로만 작성하면 key가 없어서 개발자 도구에서 에러발생
    //추후 DB를 가져올때도 추가/삭제.갱신에서 key가 없으면 문제가 발생할 수 있음
    //배열은 index를 갖고 이어서 그것으로 key를 설정할 수 있다.(비추천)

    //key는 컴포넌트의 props로 내장 : <컴포넌트명 key={}/>
    //대신 자손컴포넌트에서 값을 내려받을 수 없음

    //map() : 기존 배열값으로 새로운 배열값으로 재탄생 시키는 메서드
    //배열명.map(함수); ex) 배열명.map(()=>{});
    //함수의 매개변수 : 기존값, 인덱스, 현재값의 배열


    return (
        <div>
            <h1>BTS 목록</h1>
            <ul>
                {bts.map((bt,idx) => <Child02 key={idx} num={idx+1} name={bt} />)}
            </ul>
        </div>
    );
}

export default Bts02;