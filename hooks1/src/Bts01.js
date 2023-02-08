import React from 'react';
import Child01 from './Child01';

function Bts01(props) {
    //멤버 배열
    const bts = ['김남준','김석진','민윤기','정호석','박지민','김태형','진정국'];

    //map() : 기존 배열값으로 새로운 배열값으로 재탄생 시키는 메서드
    //배열명.map(함수); ex) 배열명.map(()=>{});
    //함수의 매개변수 : 기존값, 인덱스, 현재값의 배열

    return (
        <div>
            <h1>BTS 목록</h1>
            <ul>
                {bts.map(bt => <Child01 name={bt} />)}
            </ul>
        </div>
    );
}

export default Bts01;