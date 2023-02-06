import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

//부모컴포넌트 : 부모가 자손컴포넌트를 사용할때 문법
//1. 상단에 자손.js를 import처리
//2. jsx에 자손데이터를 마크업
//ex
//1. import Header from './Header';
//2. <Header />
function MainPage(props) {
    return (
        <div>
            <Header />
            <Main />
            <Footer />            
        </div>
    );
}

export default MainPage;