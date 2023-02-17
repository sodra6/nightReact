import React, { Component } from 'react';

class Father extends Component {
    render() {
        return (
            <div>
                <h1>부모컴포넌트</h1>
                <hr/>
                <div>{this.props.children}</div>    
            </div>
        );
    }
}

export default Father;  