import React from 'react';

//합격자 명단만 출력
function Condition3({name, isEmail}) {
    return (
        <div>
            <h2>{name} : {isEmail ? '이메일 수신' : '이메일 미수신'}</h2>
        </div>
    );
}

export default Condition3;