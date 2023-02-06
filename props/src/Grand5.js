import React from 'react';
import Child5 from './Child5';
import Fater5 from './Fater5';

//Grand 컴포넌트가 임의적으로 Child5를 Fater5의 자손으로 만듬
function Grand5(props) {
    return (
        <div>
            <Fater5>
                <Child5 />
            </Fater5>
        </div>
    );
}

export default Grand5;