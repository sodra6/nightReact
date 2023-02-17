import React, { Component } from 'react';
import './ref.css';

//ref : 클래스 컴포넌트에는 ref가 내장되어 있다.
//ref : 개발자가 특정 DOM에 접촉해야 할 때 사용
class Ref extends Component {

    //검증하기 버튼을 눌럿을때 입력값이 '1234'와 같지 않다면 초점가게 처리
    state ={
        password : '',
        clicked : false,
        validated : false
    }

    onChangeData = (e) => {
        this.setState({password : e.target.value})
    }
    onClicked = () => {
        this.setState({
            clicked : true, 
            validated : this.state.password ==='1234'
        });

        if(!this.state.validated){
            this.input.current.focus();
        }
    }

    render() {
        return (
            <div className='body'>
                <input 
                    value={this.state.password} 
                    onChange={this.onChangeData} 
                    type="password" 
                    className={this.state.clicked && (this.state.validated ? 'success' : 'failure')}
                    ref={(ref)=> this.input = ref}
                />
                <button onClick={this.onClicked}>검증하기</button>
                <h3>{this.state.password}</h3>
            </div>
        );
    }
}

export default Ref;