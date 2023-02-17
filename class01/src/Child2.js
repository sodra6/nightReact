import React, { Component } from 'react';

//자손컴포넌트
//함수형 컴포넌트 처럼 매개변수로 담지 않고 바로 [this.props.명칭] 으로 호출
class Child2 extends Component {
    render() {
        //this.props 비구조화할당
        const {name, age, hobby} = this.props;

        return (
            <div>
              <h3>이름 : {name}</h3>  
              <h3>나이 : {age}</h3>  
              <h3>취미 : {hobby}</h3>  
            </div>
        );
    }
}

//props 기본값 지정
Child2.defaultProps = {
    name : '홍길동',
    age : 20,
    hobby : '코딩'
}

export default Child2;