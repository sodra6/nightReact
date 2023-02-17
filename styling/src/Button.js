import React from 'react';
import './test2.scss';

//버튼 한개를 표시하는 자손 컴포넌트
//클래스명은 중첩이 가능
//1. 템플릿 리터럴 : ``
//  - let age = 20; console.log(`나는 ${age}살 입니다.`)
//2. 배열로 처리
// - <button className={['Button',bgcolor,size].join(' ')}>

function Button({ bgcolor, size }) {
    return (
        <div>
            <button className={`Button ${bgcolor} ${size}`}>버튼</button>
        </div>
    );
}

export default Button;