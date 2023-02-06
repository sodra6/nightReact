//리액트를 구현할 플러그인 설치
//같은 js파일을 불러올때는 확장자를 사용하지 X
import React from 'react';
import ReactDOM from 'react-dom/client';

//js가 아닌 파일은 반드시 확장자 처리
import './index.css';
import JSX06_1 from './JSX06_1';

//리액트의 서드파티 라이브러리, 웹 퍼포먼스를 측정하는 도구
import reportWebVitals from './reportWebVitals';
//id명이 root인곳에 React 실행하겠다 선언
const root = ReactDOM.createRoot(document.getElementById('root'));

//HTML을 웹페이지에 렌더링
root.render(
  <JSX06_1 />
);

reportWebVitals();
