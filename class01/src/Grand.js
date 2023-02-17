import React, { Component } from 'react';
import Child from './Child';
import Father from './Father';

class Grand extends Component {
    render() {
        return (
            <div>
                <Father>
                    <Child />
                </Father>
            </div>
        );
    }
}

export default Grand;