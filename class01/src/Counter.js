import React, { Component } from 'react';

//state : 함수형과 다르게 내장되어 있다.
// - 부모가 내려주는값이 아니라 컴포넌트 자신이 어떤 값을 관리하고 싶을때 사용하는 것
class Counter extends Component {
    state = {
        count : 0
    }
    //이벤트에 적용할 함수를 변수에 담지 말고 바로 선언
    onPlus = () =>{
        this.setState({count : this.state.count + 1})
    }
    onMinus = () =>{
        this.setState({count : this.state.count - 1})
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.onPlus}>+</button>
                <button onClick={this.onMinus}>-</button>
            </div>
        );
    }
}

export default Counter;