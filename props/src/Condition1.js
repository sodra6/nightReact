import React from 'react';

function Condition1({name, score}) {
    //const answer = prompt("점수는?", "0~100");
    return (
        <div>
            <h2>{name} : {score>=80 ? '합격' : '불합격'}</h2>
        </div>
    );
}

export default Condition1;