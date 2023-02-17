import React from 'react';
import './test2.scss';
//버튼 한개를 표시하는 자손 컴포넌트
function Button({ bgcolor }) {
    return (
        <div>
            <button className={`Button ${bgcolor}`}>버튼</button>
        </div>
    );
}

export default Button;