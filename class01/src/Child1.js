import React, { Component } from 'react';

//자손컴포넌트
//함수형 컴포넌트 처럼 매개변수로 담지 않고 바로 [this.props.명칭] 으로 호출
class Child1 extends Component {
    
    render() {
        return (
            <div>
              <h3>이름 : {this.props.name}</h3>  
              <h3>나이 : {this.props.age}</h3>  
              <h3>취미 : {this.props.hobby}</h3>  
            </div>
        );
    }
}

export default Child1;