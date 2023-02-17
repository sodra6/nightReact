import React, { Component } from 'react';

//최근에는 함수형 컴포넌트를 사용
//과거 프로젝트 수정, 서드파티 라이브러리가 클래스 컴포넌트로 만들어진 경우

//JSX문법은 함수형과 사용법이 같음
class Class1 extends Component {
    render() {
        return (
            <div>
                <h1>안녕하세요</h1>
            </div>
        );
    }
}

export default Class1;