import React from 'react';
import './test1.scss';
//sass는 설치해야 사용할수 있다.
//설치방법(해당 프로젝트폴더에 설치)
//1. yarn add node-sass 
//2. npm i sass

function Sass1(props) {
    return (
        <div>
            <h1>리액트 테스트</h1>
            <h2 className='title02'>클래스 적용 테스트</h2>
        </div>
    );
}

export default Sass1;